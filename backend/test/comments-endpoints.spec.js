const knex=require('knex');
const app=require('../src/app');
const helpers=require('./test-helpers');

describe('Endpoints',function(){
	let db;
	const {testUsers,testOrgs}=helpers.makeCommentsFixtures();
	
	before('make knex instance',()=>{
		db=knex({client:'pg',connection:process.env.TEST_DATABASE_URL});
		app.set('db',db);
	});
	  
	after('disconnect from db',()=>db.destroy());
	
	before('cleanup',()=>helpers.cleanTables(db));
	
	afterEach('cleanup',()=>helpers.cleanTables(db));

	describe(`POST /api/orgs/:orgId/comments`,()=>{
		beforeEach('insert users',()=>helpers.seedUsersTables(db,testUsers));
		beforeEach('insert organizations',()=>helpers.seedOrgsTables(db,testOrgs));
		const newComment=helpers.makeNewComment();
		it(`creates a comment, responding with 201 and the comment`,()=>{
			return supertest(app)
				.post('/api/orgs/:orgId/comments')
				.set('Authorization',helpers.makeAuthHeader(testUsers[0]))
				.send(newComment)
			  	.expect(201)
			  	.expect(res=>{
					expect(res.body.id).to.eql(newComment.id);
					expect(res.body.title).to.eql(newComment.title);
					expect(res.body.org_id).to.eql(newComment.org_id);
					expect(res.body.comment).to.eql(newComment.comment);
					expect(res.body.date_published).to.eql(newComment.date_published);
			  	});
		});
		const requiredFields=['title','org_id','comment'];
		requiredFields.forEach(field=>{
			const newComment=helpers.makeNewComment();
			it(`responds with 400 and an error message when the '${field}' is missing`,()=>{
				delete newComment[field]
				return supertest(app)
					.post('/api/orgs/:orgId/comments')
					.set('Authorization',helpers.makeAuthHeader(testUsers[0]))
					.send(newComment)
					.expect(400,{
						error:{message:`Missing '${field}' in request body`}
					});
			});
		});
		it('removes XSS attack content from response',()=>{
			const {maliciousComment,expectedComment}=helpers.makeMaliciousComment();
			return supertest(app)
				.post('/api/orgs/:orgId/comments')
				.set('Authorization',helpers.makeAuthHeader(testUsers[0]))
				.send(maliciousComment)
				.expect(201)
				.expect(res=>{
					expect(res.body.title).to.eql(expectedComment.title);
					expect(res.body.comment).to.eql(expectedComment.comment);
				});
		});
	});	
});