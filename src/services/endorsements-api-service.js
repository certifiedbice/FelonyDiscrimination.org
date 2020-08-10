import config from '../config'

const EndorsementsApiService={
	postOrgEndorsements(userId,orgId,endorsement){
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}/endorsements`,{
			method:'POST',
			headers:{'content-type':'application/json',},
	  		body:JSON.stringify({
				user_id:userId,
				org_id:orgId,
				endorsement:endorsement,
			}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
	},
}

export default EndorsementsApiService
