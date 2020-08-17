import TokenService from './token-service';
import config from '../config'

const CommentsApiService={
	getCommentsOrgById(orgId){
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}/comments`,{
			headers:{},
		})
		.then(res=>
			(!res.ok)
		  		? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
  	},
	postOrgComment(orgId,title,comment){
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}/comments`,{
			method:'POST',
			headers:{
				'content-type':'application/json',
				'authorization':`basic ${TokenService.getAuthToken()}`
			},
	  		body:JSON.stringify({
				org_id:orgId,
				title:title,
				comment:comment,
			}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
	}
}

export default CommentsApiService;
