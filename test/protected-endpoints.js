const knex=require('knex');
const app=require('../src/app');
const helpers=require('./test-helpers');

describe('Organizations Endpoints',function(){
	let db;
	const {testUsers,testOrgs,testComments}=helpers.makeOrgsFixtures();

	before('make knex instance',()=>{
		db=knex({client:'pg',connection:process.env.TEST_DATABASE_URL});
		app.set('db', db);
	});

	after('disconnect from db',()=>db.destroy());

	before('cleanup',()=>helpers.cleanTables(db));

	afterEach('cleanup',()=>helpers.cleanTables(db));

	describe(`Protected endpoints`,()=>{
		const protectedEndpoints=[
			{
				name:'POST /api/orgs/submit-org',
				path:'/api/orgs/submit-org'
			},
			{
				name:'POST /api/orgs/:orgId/endorsements',
				path:'/api/orgs/:orgId/endorsements'
			},
			{
				name:'POST /api/orgs/:orgId/comments',
				path:'/api/orgs/:orgId/comments'
			}
		];
		protectedEndpoints.forEach(endpoint=>{
			describe(endpoint.name,()=>{
				it('should return 401 \'Missing basic token\' when missing basic token',()=>{
					return supertest(app)
						.post(endpoint.path)
						.expect(401,{error:'Missing basic token'});
				});
				it('should return 401 \'Unauthorized request\' when no credentials exist',()=>{
					const userNoCreds={user_name:'',password:''};
					return supertest(app)
						.post(endpoint.path)
						.set('Authorization',helpers.makeAuthHeader(userNoCreds))
						.expect(401,{error:'Unauthorized request'});
				});
				it('should return 401 \'Unauthorized request\' when invalid user',()=>{
					const invalidUser={user_name:'badUser',password:''};
					return supertest(app)
						.post(endpoint.path)
						.set('Authorization',helpers.makeAuthHeader(invalidUser))
						.expect(401,{error:'Unauthorized request'});
				});
				it('should return 401 \'Unauthorized request\' when invalid password',()=>{
					const userWithBadPassword={user_name:testUsers[0].user_name,password:'badPassword'};
					return supertest(app)
						.post(endpoint.path)
						.set('Authorization',helpers.makeAuthHeader(userWithBadPassword))
						.expect(401,{error:'Unauthorized request'});
				});
			});
		});
	});
});