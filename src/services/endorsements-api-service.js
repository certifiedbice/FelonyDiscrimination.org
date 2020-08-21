import TokenService from './token-service';
import config from '../config';

const EndorsementsApiService={
	postOrgEndorsements(orgId,endorsement){
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}/endorsements`,{
			method:'POST',
			headers:{
				'content-type':'application/json',
				'authorization':`bearer ${TokenService.getAuthToken()}`
			},
	  		body:JSON.stringify({
				org_id:orgId,
				endorsement:endorsement,
			}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
	}
}

export default EndorsementsApiService
