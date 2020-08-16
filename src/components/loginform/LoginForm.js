import React,{Component} from 'react';
import TokenService from '../../services/token-service';

export default class LoginForm extends Component{
    static defaultProps={onLoginSuccess:()=>{}};
	state={error:null};

	handleSubmitBasicAuth=e=>{
		e.preventDefault();
		const {user_name,password}=e.target;
		TokenService.saveAuthToken(TokenService.makeBasicAuthToken(user_name.value,password.value));
		user_name.value='';
		password.value='';
		this.props.onLoginSuccess();
	}

	render(){
        const {error}=this.state;
        return(
            <form id="login-form" name="login-form" aria-label="Login form" onSubmit={this.handleSubmitBasicAuth}>
	            <fieldset>
					<legend><h2>Login</h2></legend>
					<div className="login-form-element-container">
						<label htmlFor='login-form-email'>Email: </label>
						<input className="login-form-element" name="user_name" id="login-form-email" type="text" required aria-labelledby="Login form email" placeholder="Email"/>
					</div>
					<div className="login-form-element-container">
						<label htmlFor='login-form-password'>Password: </label>
						<input className="login-form-element" name="password" id="login-form-password" type="password" required aria-labelledby="Login form password" placeholder="Password"/>
					</div>
					<div className="login-form-error-container"></div>
					<div className="login-form-element-container">
                        <input id="login-form-submit" type="submit" aria-label="Login form submit" value="Submit"/>
					</div>
				</fieldset>
			</form>
        );
	}
}