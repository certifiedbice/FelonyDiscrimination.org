import React from 'react';
import UserRegistrationForm from '../../components/userregistrationform/UserRegistrationForm';
import './SignUp.css';

export default function SignUp(){
	return(
		<section id='form-container'>
			<UserRegistrationForm/>
		</section>
	);
}