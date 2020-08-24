import React,{Component} from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import Context from '../../context/Context';

export default class RegistrationForm extends Component{
	static contextType=Context;
	state={error:null};
	
	onRegistrationSuccess=(authToken,userId)=>{
	 	console.log(authToken)
		TokenService.saveAuthToken(authToken);
		//this.props.location=`/user/${userId}`
		this.context.loginState(true);
	}
	
	handleSubmit=e=>{
		e.preventDefault();
		const {username,f_name,l_name,email,city,state,zipcode,password}=e.target;
		this.setState({error:null});
	    AuthApiService.postUser({
			username:username.value,
			f_name:f_name.value,
			l_name:l_name.value,
			email:email.value,
			city:city.value,
			user_state:state.value,
			zipcode:zipcode.value,
			password:password.value
		})
		.then(res=>{this.onRegistrationSuccess(res.password.authToken,res.id);})
		.then(user=>{
			username='';
			f_name='';
			l_name='';
			email='';
			city='';
			state='';
			zipcode='';
			password='';
  		})
		.catch(res=>{this.setState({error:res.error});});
    }

	render(){
		const {error}=this.state;
		return(
			<form id='signup-form' name='signup-form' aria-label='signup-form' onSubmit={this.handleSubmit}>
				<fieldset>
					<legend><h2>Sign Up</h2></legend>
					<div className='form-element-container'>
						<label htmlFor='signup-form-username'>User Name:</label>
						<input id='signup-form-username' name='username' type='text' required aria-labelledby='signup-form-username' placeholder='Username'/>
					</div>
					<div className='form-element-container'>
						<label htmlFor='signup-form-first-name'>First Name:</label>
						<input id='signup-form-first-name' name='f_name' type='text' required aria-labelledby='signup-form-first-name' placeholder='First Name'/>
					</div>
					<div className='form-element-container'>
						<label htmlFor='signup-form-last-name'>Last Name:</label>
						<input id='signup-form-last-name' name='l_name' type='text' required aria-labelledby='signup-form-last-name' placeholder='Last Name'/>
					</div>
					<div className='form-element-container'>
						<label htmlFor='signup-form-email'>Email:</label>
						<input id='signup-form-email' name='email' type='text' required aria-labelledby='signup-form-password' placeholder='Email'/>
					</div>
					<div className='form-element-container'>
						<label htmlFor='signup-form-city'>City:</label>
						<input id='signup-form-city' name='city' type='text' required aria-labelledby='signup-form-city' placeholder='City'/>
					</div>
					<div className='form-element-container'>
							<label htmlFor='signup-form-state'>State:</label>
							<select id='signup-form-state' name='state' required aria-labelledby='signup-form-state'>
								<option value='AL'>AL</option>
								<option value='AK'>AK</option>
								<option value='AZ'>AZ</option>
								<option value='AR'>AR</option>
								<option value='CA'>CA</option>
								<option value='CO'>CO</option>
								<option value='CT'>CT</option>
								<option value='DE'>DE</option>
								<option value='FL'>FL</option>
								<option value='GA'>GA</option>
								<option value='HI'>HI</option>
								<option value='ID'>ID</option>
								<option value='IL'>IL</option>
								<option value='IN'>IN</option>
								<option value='IA'>IA</option>
								<option value='KS'>KS</option>
								<option value='KY'>KY</option>
								<option value='LA'>LA</option>
								<option value='ME'>ME</option>
								<option value='MD'>MD</option>
								<option value='MA'>MA</option>
								<option value='MI'>MI</option>
								<option value='MN'>MN</option>
								<option value='MS'>MS</option>
								<option value='MO'>MO</option>
								<option value='MT'>MT</option>
								<option value='NE'>NE</option>
								<option value='NV'>NV</option>
								<option value='NH'>NH</option>
								<option value='NJ'>NJ</option>
								<option value='NM'>NM</option>
								<option value='NY'>NY</option>
								<option value='NC'>NC</option>
								<option value='ND'>ND</option>
								<option value='OH'>OH</option>
								<option value='OK'>OK</option>
								<option value='OR'>OR</option>
								<option value='PA'>PA</option>
								<option value='RI'>RI</option>
								<option value='SC'>SC</option>
								<option value='SD'>SD</option>
								<option value='TN'>TN</option>
								<option value='TX'>TX</option>
								<option value='UT'>UT</option>
								<option value='VT'>VT</option>
								<option value='VA'>VA</option>
								<option value='WA'>WA</option>
								<option value='WV'>WV</option>
								<option value='WI'>WI</option>
								<option value='WY'>WY</option>
							</select>
					</div>
					<div className='form-element-container'>
						<label htmlFor='signup-form-zipcode'>Zip Code:</label>
						<input id='signup-form-zipcode' name='zipcode' type='text' required aria-labelledby='signup-form-zipcode' placeholder='Zip Code'/>
					</div>
					<div className='form-element-container'>
						<label htmlFor='signup-form-password'>Password:</label>
						<input id='signup-form-password' name='password' type='password' required aria-labelledby='signup-form-password' placeholder='Password'/>
					</div>
					<div className='form-element-submit-container'>
						<input id='form-submit' type='submit' required aria-label='form-submit' value='Submit'/>
					</div>
				</fieldset>
			</form>
		);
	}
}
