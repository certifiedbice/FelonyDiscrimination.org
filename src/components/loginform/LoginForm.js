import React,{Component} from 'react';
import TokenService from '../../services/token-service';
import Context from '../../context/Context';

export default class LoginForm extends Component{
    static contextType=Context;
    //static defaultProps={onLoginSuccess:()=>{}};
	state={error:null};

	onLoginSuccess=()=>{}

	handleSubmitBasicAuth=e=>{
		e.preventDefault();
		const {email,password}=e.target;
		TokenService.saveAuthToken(TokenService.makeBasicAuthToken(email.value,password.value));
		email.value='';
		password.value='';
		this.onLoginSuccess();
		this.context.loginState(true);
	}

	render(){
		const {error}=this.state;
        return(
            <form id='login-form' name='login-form' aria-label='Login form' onSubmit={this.handleSubmitBasicAuth}>
	            <fieldset>
					<legend><h2>Login</h2></legend>
					<div className='form-element-container'>
						<label htmlFor='login-form-email'>Email: </label>
						<input id='login-form-email' name='email' type='text' required aria-labelledby='login-form-email' placeholder='Email'/>
					</div>
					<div className='form-element-container'>
						<label htmlFor='login-form-password'>Password: </label>
						<input id='login-form-password' name='password' type='password' required aria-labelledby='login-form-password' placeholder='Password'/>
					</div>
					<div className='form-error-container'></div>
					<div className='form-element-submit-container'>
                        <input id='form-submit' type='submit' aria-label='form-submit' value='Submit'/>
					</div>
				</fieldset>
			</form>
        );
	}
}