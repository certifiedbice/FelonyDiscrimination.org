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
	postOrgComment(userId,orgId,title,content){
		return fetch(`${config.API_ENDPOINT}/orgs/${orgId}/comments`,{
			method:'POST',
			headers:{'content-type':'application/json',},
	  		body:JSON.stringify({
				user_id:userId,
				org_id:orgId,
				title:title,
				content:content,
			}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
	},
}

export default CommentsApiService;
