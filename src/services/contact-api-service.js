import config from '../config'

const ContactApiService={
    sendMail(name,email,message){
        return fetch(`${config.API_ENDPOINT}/contact`,{
			method:'POST',
			headers:{'Accept': 'application/json','content-type':'application/json',},
	  		body:JSON.stringify({
				name:name,
				email:email,
				message:message,
			}),
		})
		.then(res=>
			(!res.ok)
				? res.json().then(e=>Promise.reject(e))
		  		: res.json()
	  	)
    }
}

export default ContactApiService;