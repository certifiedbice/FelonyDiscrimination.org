import React,{Component} from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import Context from '../../context/Context';

export default class LoginForm extends Component{
    static contextType=Context;
    state={error:null};

	onLoginSuccess=()=>{
		this.context.loginState(true);
	}

	handleSubmitJwtAuth=e=>{
		e.preventDefault();
		this.setState({error:null});
		const {email,password}=e.target;

		AuthApiService.postLogin({email:email.value,password:password.value})
		.then(res=>{
			email.value='';
			password.value='';
			TokenService.saveAuthToken(res.authToken);
			this.onLoginSuccess();
		})
		.catch(res=>{this.setState({error:res.error})});
	}

	render(){
		const {error}=this.state;
        return(
            <form id='login-form' name='login-form' aria-label='Login form' onSubmit={this.handleSubmitJwtAuth}>
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