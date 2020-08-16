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
		const protectedOrgEndpoints=[
			{
				name:'POST /api/orgs/submit-org',
				path:'/api/orgs/submit-org'
			}
        ];
        describe(protectedOrgEndpoints[0].name,()=>{
			it('should return 401 \'Missing basic token\' when missing basic token',()=>{
				return supertest(app)
					.post(protectedOrgEndpoints[0].path)
					.expect(401,{error:'Missing basic token'});
			});
			it('should return 401 \'Unauthorized request\' when no credentials exist',()=>{
				const userNoCreds={user_name:'',password:''};
				return supertest(app)
					.post(protectedOrgEndpoints[0].path)
					.set('Authorization',helpers.makeAuthHeader(userNoCreds))
					.expect(401,{error:'Unauthorized request'});
			});
			it('should return 401 \'Unauthorized request\' when invalid user',()=>{
				const invalidUser={user_name:'badUser',password:''};
				return supertest(app)
					.post(protectedOrgEndpoints[0].path)
					.set('Authorization',helpers.makeAuthHeader(invalidUser))
					.expect(401,{error:'Unauthorized request'});
			});
			it('should return 401 \'Unauthorized request\' when invalid password',()=>{
				const userWithBadPassword={user_name:testUsers[0].user_name,password:'badPassword'};
				return supertest(app)
					.post(protectedOrgEndpoints[0].path)
					.set('Authorization',helpers.makeAuthHeader(userWithBadPassword))
					.expect(401,{error:'Unauthorized request'});
			});
		});
	});
});