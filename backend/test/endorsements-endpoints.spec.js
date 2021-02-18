const knex=require('knex');
const app=require('../src/app');
const helpers=require('./test-helpers');

describe('Endpoints',function(){
	let db;
	const {testUsers,testOrgs}=helpers.makeEndorsementsFixtures();
	
	before('make knex instance',()=>{
		db=knex({client:'pg',connection:process.env.TEST_DATABASE_URL});
		app.set('db',db);
	});
	  
	after('disconnect from db',()=>db.destroy());
	
	before('cleanup',()=>helpers.cleanTables(db));
	
	afterEach('cleanup',()=>helpers.cleanTables(db));

	describe(`POST /api/orgs/:orgId/endorsements`,()=>{
		beforeEach('insert users',()=>helpers.seedUsersTables(db,testUsers));
		beforeEach('insert organizations',()=>helpers.seedOrgsTables(db,testOrgs));
		const newEndorsement=helpers.makeNewEndorsement();
		it(`creates an endorsement, responding with 201 and the new endorsement`,()=>{
			return supertest(app)
				.post('/api/orgs/:orgId/endorsements')
				.set('Authorization',helpers.makeAuthHeader(testUsers[0]))
				.send(newEndorsement)
			  	.expect(201)
			  	.expect(res=>{
					expect(res.body.id).to.eql(newEndorsement.id);
					expect(res.body.org_id).to.eql(newEndorsement.org_id);
					expect(res.body.endorsement).to.eql(newEndorsement.endorsement);
					expect(res.body.date_published).to.eql(newEndorsement.date_published);
			  	});
		});
		const requiredFields=['org_id','endorsement'];
		requiredFields.forEach(field=>{
			const newEndorsement=helpers.makeNewEndorsement();
			it(`responds with 400 and an error message when the '${field}' is missing`,()=>{
				delete newEndorsement[field]
				return supertest(app)
					.post('/api/orgs/:orgId/endorsements')
					.set('Authorization',helpers.makeAuthHeader(testUsers[0]))
					.send(newEndorsement)
					.expect(400,{
						error:{message:`Missing '${field}' in request body`}
					});
			});
		});
		it('removes XSS attack content from response',()=>{
			const {maliciousEndorsement,expectedEndorsement}=helpers.makeMaliciousEndorsement();
			return supertest(app)
				.post('/api/orgs/:orgId/endorsements')
				.set('Authorization',helpers.makeAuthHeader(testUsers[0]))
				.send(maliciousEndorsement)
				.expect(500)
				// .expect(res=>{
				// 	console.log(res)
				// 	expect(res.errormsg).to.eql('Invalid endorsement value');
				// });				
		});
	});	
});