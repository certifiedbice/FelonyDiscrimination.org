import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/loginform/LoginForm';
import './Login.css';

export default class Login extends Component{
	render(){
		return(
			<section id="form-container">
				<LoginForm/>
				<h3><p>Test login info: email: jake.todd@email.com / password: somePass1</p></h3>
				<h3><p><Link to='/signup'>Sign Up</Link></p></h3>
				<h3><p><Link id='forgotten-login-info-link' to='/forgottenlogininfo'>Forgotten your Login info?</Link></p></h3>
			</section>
		);
	}
}