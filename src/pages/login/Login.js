import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/loginform/LoginForm';
import './Login.css';

export default function Login(){
	return(
		<section id="login-form-container">
			<LoginForm/>
			<h3><p><Link to='/signup'>Sign Up</Link></p></h3>
			<h3><p><Link id='forgotten-login-info-link' to='/forgottenlogininfo'>Forgotten your Login info?</Link></p></h3>
		</section>
	);
}