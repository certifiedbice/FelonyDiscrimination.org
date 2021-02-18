import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function PublicOnlyRoute({component}){
	const Component=component;
	// write some check to determine where this should lead
		// for signup, it should go to /users/:user_id
	return(
		<Route render={componentProps=>(
			TokenService.hasAuthToken()
				? <Redirect to={'/'}/>
		  		: <Component {...componentProps}/>
	  	)}/>
  	);
}