import React from 'react';
import './SignUp.css';

export default function SignUp(){
	return(
		<section id="signup-form-container">
			<form id="signup-form" name="signup-form" aria-label="Signup form">
				<fieldset>
					<legend><h2>Sign Up</h2></legend>
					<div className="signup-form-element-container">
						<label>First Name: </label>
						<input className="signup-form-element" name="signup-form-first-name" id="signup-form-first-name" type="text" required aria-labelledby="signup-form-first-name" placeholder="First Name"/>
					</div>
					<div className="signup-form-element-container">
						<label>Last Name: </label>
						<input className="signup-form-element" name="signup-form-last-name" id="signup-form-last-name" type="text" required aria-labelledby="signup-form-last-name" placeholder="Last Name"/>
					</div>
					<div className="signup-form-element-container">
						<label>Email: </label>
						<input className="signup-form-element" name="signup-form-email" id="signup-form-email" type="text" required aria-labelledby="signup-form-password" placeholder="Email"/>
					</div>
					<div className="signup-form-element-container">
						<label>City: </label>
						<input className="signup-form-element" name="signup-form-city" id="signup-form-city" type="text" required aria-labelledby="signup-form-city" placeholder="City"/>
					</div>
					<div className="signup-form-element-container">
							<label>State:</label>
							<select className="signup-form-element" name="signup-form-state" id="signup-form-state" required>
								<option value="AL">AL</option>
								<option value="AK">AK</option>
								<option value="AZ">AZ</option>
								<option value="AR">AR</option>
								<option value="CA">CA</option>
								<option value="CO">CO</option>
								<option value="CT">CT</option>
								<option value="DE">DE</option>
								<option value="FL">FL</option>
								<option value="GA">GA</option>
								<option value="HI">HI</option>
								<option value="ID">ID</option>
								<option value="IL">IL</option>
								<option value="IN">IN</option>
								<option value="IA">IA</option>
								<option value="KS">KS</option>
								<option value="KY">KY</option>
								<option value="LA">LA</option>
								<option value="ME">ME</option>
								<option value="MD">MD</option>
								<option value="MA">MA</option>
								<option value="MI">MI</option>
								<option value="MN">MN</option>
								<option value="MS">MS</option>
								<option value="MO">MO</option>
								<option value="MT">MT</option>
								<option value="NE">NE</option>
								<option value="NV">NV</option>
								<option value="NH">NH</option>
								<option value="NJ">NJ</option>
								<option value="NM">NM</option>
								<option value="NY">NY</option>
								<option value="NC">NC</option>
								<option value="ND">ND</option>
								<option value="OH">OH</option>
								<option value="OK">OK</option>
								<option value="OR">OR</option>
								<option value="PA">PA</option>
								<option value="RI">RI</option>
								<option value="SC">SC</option>
								<option value="SD">SD</option>
								<option value="TN">TN</option>
								<option value="TX">TX</option>
								<option value="UT">UT</option>
								<option value="VT">VT</option>
								<option value="VA">VA</option>
								<option value="WA">WA</option>
								<option value="WV">WV</option>
								<option value="WI">WI</option>
								<option value="WY">WY</option>
							</select>
					</div>
					<div className="signup-form-element-container">
						<label>Zip Code: </label>
						<input className="signup-form-element" name="signup-form-zipcode" id="signup-form-zipcode" type="text" required aria-labelledby="signup-form-zipcode" placeholder="Zip Code"/>
					</div>
					<div className="signup-form-element-container">
						<label>Password: </label>
						<input className="signup-form-element" name="signup-form-password" id="signup-form-password" type="password" required aria-labelledby="signup-form-password" placeholder="Password"/>
					</div>
					<div className="signup-form-element-container">
						<input id="signup-form-submit" type="submit" required aria-label="Signup form submit" value="Submit"/>
					</div>
				</fieldset>
			</form>
		</section>
	);
}