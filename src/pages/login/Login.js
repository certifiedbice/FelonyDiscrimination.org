import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

export default function Login(){
	return(
		<section id="login-form-container">
			<form id="login-form" name="login-form" aria-label="Login form">
				<fieldset>
					<legend><h2>Login or <Link to='/signup'>Sign Up</Link></h2></legend>
					<div className="login-form-element-container">
						<label>Email: </label>
						<input className="login-form-element" name="login-form-email" id="login-form-email" type="text" required aria-labelledby="Login form email" placeholder="Email"/>
					</div>
					<div className="login-form-element-container">
						<label>Password: </label>
						<input className="login-form-element" name="login-form-password" id="login-form-password" type="password" required aria-labelledby="Login form password" placeholder="Password"/>
					</div>
					<div className="login-form-error-container">
					</div>
					<div className="login-form-element-container">
						<input id="login-form-submit" type="submit" required aria-label="Login form submit" value="Submit"/>
					</div>
				</fieldset>
			</form>
			<h3><Link id='forgotten-login-info-link' to='/forgottenlogininfo'>Forgotten your Login info?</Link></h3>			
		</section>
	);
}