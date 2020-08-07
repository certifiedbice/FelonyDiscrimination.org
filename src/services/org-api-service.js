import config from '../config'

const OrgApiService={
	getOrgById(orgId){
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}`,{
			headers:{},
		})
		.then(res=>
			(!res.ok)
		  		? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
  	},
	postOrg(org_name,org_phone,org_st_addr,org_city,org_state,org_zipcode,org_type){
		return fetch(`${config.API_ENDPOINT}/orgs/submit-org`,{
			method:'POST',
			headers:{'content-type':'application/json',},
	  		body:JSON.stringify({
				org_name:org_name,
				org_phone:org_phone,
				org_st_addr:org_st_addr,
				org_city:org_city,
				org_state:org_state,
				org_zipcode:org_zipcode,
				org_type:org_type
	  		}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
	},
	searchOrgs(searchStr){
		return fetch(`${config.API_ENDPOINT}/orgs/search?str=${searchStr}`,{
			headers:{},
		})
		.then(res=>
			(!res.ok)
		  		? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
  	},
  	getOrgComments(orgId) {
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}/comments`,{
			headers:{},
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
				: res.json()
	  	)
	},
	postOrgComments(/*userId,*/orgId,comment){
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}/comments`,{
			method:'POST',
			headers:{'content-type':'application/json',},
	  		body:JSON.stringify({
				// user_id:userId,
				org_id:orgId,
				comment:comment
			}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
	},
	getOrgEndorsements(orgId) {
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}/endorsements`,{
			headers:{},
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
				: res.json()
	  	)
	},
	postOrgEndorsements(/*userId,*/orgId,endorsement){
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}/endorsements`,{
			method:'POST',
			headers:{'content-type':'application/json',},
	  		body:JSON.stringify({
				// user_id:userId,
				org_id:orgId,
				endorsement:endorsement
			}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
	},
}

export default OrgApiService
