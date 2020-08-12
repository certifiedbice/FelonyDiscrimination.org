const knex=require('knex');
const app=require('../src/app');
const helpers=require('./test-helpers');

const {makeOrgsArray,makeMaliciousOrg,makeUsersArray,makeCommentsArray,makeEndorsementsArray}=require('./test-helpers');

describe('Endpoints',function(){
	let db;
	before('make knex instance',()=>{
		db=knex({
			client:'pg',
			connection:process.env.TEST_DATABASE_URL,
		});
		app.set('db', db);
	});
  	after('disconnect from db',()=>db.destroy());
	before('cleanup',()=>helpers.cleanTables(db));
	afterEach('cleanup',()=>helpers.cleanTables(db));
	describe('GET /api/orgs/:orgId',()=>{
		context(`Given the organization doesn\'t exist`,()=>{
	  		it(`responds with 404 and Organization doesn\'t exist`,()=>{
				return supertest(app)
		  		.get('/api/orgs/0')
		  		.expect(404,`{"error":{"message":"Organization doesn't exist"}}`);
	  		});
		});
		context('Given there are organizations in the database',()=>{
			const testOrgs=makeOrgsArray();
			beforeEach('insert organizations',()=>{
			  return db
				.into('organizations')
				.insert(testOrgs)
				.then(()=>{
					return db
						.into('organizations')
						.insert(testOrgs)
				});
			});
			it('responds with 200 and the specified organization',()=>{
				const orgId=2;
				let expectedOrg=testOrgs[orgId-1];
				expectedOrg={...expectedOrg, id:orgId}
				return supertest(app)
					.get(`/api/orgs/${orgId}`)
					.expect(200,expectedOrg)
			});
		});
	});
	describe('GET /api/orgs/search',()=>{
		context(`Given an empty database`,()=>{
			it(`responds with 200 and an empty array`,()=>{
				return supertest(app)
		  		.get('/api/orgs/search?str=80203')
		  		.expect(200,[])
	  		});
		});
		context(`Given no search query param`,()=>{
	  		it(`responds with 406 and No query specified`,()=>{
				return supertest(app)
		  		.get('/api/orgs/search')
		  		.expect(406,'"No query specified"')
	  		});
		});
		context(`Given a valid search query param`,()=>{
			const testOrgs=makeOrgsArray();
			beforeEach('insert organizations',()=>{
			  return db
				.into('organizations')
				.insert(testOrgs)
				.then(()=>{
					return db
						.into('organizations')
						.insert(testOrgs)
				});
			});
			it(`responds with 200 and the query results`,()=>{
				let expectedOrg=testOrgs[0];
				expectedOrg={...expectedOrg,id:'1'}
				// Parse all object key/values to lowercase strings
				Object.keys(expectedOrg).forEach(key=>{
					if(expectedOrg[key]!==null){// Account for null endorsement fields
						expectedOrg[key]=expectedOrg[key].toString().toLowerCase();
					}
				});
				return supertest(app)
					.get('/api/orgs/search?str=tulsa')
					.expect(200)
					.expect(res=>{
						expect(res.body[0].id).to.eql(expectedOrg.id)
						expect(res.body[0].org_name).to.eql(expectedOrg.org_name)
						expect(res.body[0].org_phone).to.eql(expectedOrg.org_phone)
						expect(res.body[0].org_st_addr).to.eql(expectedOrg.org_st_addr)
						expect(res.body[0].org_city).to.eql(expectedOrg.org_city)
						expect(res.body[0].org_state).to.eql(expectedOrg.org_state)
						expect(res.body[0].org_zipcode).to.eql(expectedOrg.org_zipcode)
						// Search router needs refinement before these can be included.
						//expect(res.body[0].pos_endorsements).to.eql(expectedOrg.pos_endorsements)
						//expect(res.body[0].neg_endorsements).to.eql(expectedOrg.neg_endorsements)
						expect(res.body[0].org_type).to.eql(expectedOrg.org_type)
			  		})
			});
	  	});
	});
	describe(`POST /api/orgs/submit-org`,()=>{
		const testOrgs=makeOrgsArray();
		beforeEach('insert malicious Organization',()=>{
	  		return db
			.into('organizations')
			.insert(testOrgs)
		});
		it(`creates an organization, responding with 201 and the new organization`,()=>{
			const newOrg={
				org_name:'Test APT',
				org_phone:'0000000000',
				org_st_addr:'123 S Test Ave',
				org_city:'tulsa',
				org_state:'OK',
				org_zipcode:'74107',
				org_type:'housing'
			};
			return supertest(app)
				.post('/api/orgs/submit-org')
			  	.send(newOrg)
			  	.expect(201)
			  	.expect(res=>{
					expect(res.body.org_name).to.eql(newOrg.org_name)
					expect(res.body.org_phone).to.eql(newOrg.org_phone)
					expect(res.body.org_st_addr).to.eql(newOrg.org_st_addr)
					expect(res.body.org_city).to.eql(newOrg.org_city)
					expect(res.body.org_state).to.eql(newOrg.org_state)
					expect(res.body.org_zipcode).to.eql(newOrg.org_zipcode)
					expect(res.body.pos_endorsements).to.be.undefined
					expect(res.body.neg_endorsements).to.be.undefined
					expect(res.body.org_type).to.eql(newOrg.org_type)
			  	})
				.then(res=>
					supertest(app)
						.get(`/api/orgs/${res.body.id}`)
						.expect(res=>{
							expect(res.body.org_name).to.eql(newOrg.org_name)
							expect(res.body.org_phone).to.eql(newOrg.org_phone)
							expect(res.body.org_st_addr).to.eql(newOrg.org_st_addr)
							expect(res.body.org_city).to.eql(newOrg.org_city)
							expect(res.body.org_state).to.eql(newOrg.org_state)
							expect(res.body.org_zipcode).to.eql(newOrg.org_zipcode)
							expect(res.body.pos_endorsements).to.be.empty
							expect(res.body.neg_endorsements).to.be.empty
							expect(res.body.org_type).to.eql(newOrg.org_type)
						})
				);
		});
		const requiredFields=['org_name','org_phone','org_st_addr','org_city','org_state','org_zipcode','org_type'];
		requiredFields.forEach(field=>{
			const newOrg={
				org_name:'Test APT',
				org_phone:'0000000000',
				org_st_addr:'123 S Test Ave',
				org_city:'tulsa',
				org_state:'OK',
				org_zipcode:'74107',
				org_type:'housing'
			};
			it(`responds with 400 and an error message when the '${field}' is missing`,()=>{
				delete newOrg[field]
				return supertest(app)
					.post('/api/orgs/submit-org')
					.send(newOrg)
					.expect(400,{
						error:{message:`Missing '${field}' in request body`}
					});
			});
		});
		it('removes XSS attack content from response',()=>{
			const {maliciousOrg,expectedOrg}=makeMaliciousOrg();
			return supertest(app)
				.post('/api/orgs/submit-org')
				.send(maliciousOrg)
				.expect(201)
				.expect(res=>{
					expect(res.body.org_name).to.eql(expectedOrg.org_name)
					expect(res.body.org_st_addr).to.eql(expectedOrg.org_st_addr)
				});
		});
	});
	//test comments
		//get comments
		//post comment
	//test endorsements
		//get endorsements
		//post endorsement
});