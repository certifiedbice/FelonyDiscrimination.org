import React from 'react';
import './Contact.css';

export default function Contact(){
	return(
			<section id="contact-form-container">
				<form id="contact-form" name="contact-form" aria-label="Contact form">
					<fieldset>
						<legend><h2>Contact Us</h2></legend>
						<div className="contact-form-element-container">
							<label>Name: </label>
							<input className="contact-form-element" name="contact-form-name" id="contact-form-name" type="text" required aria-labelledby="Contact form name" placeholder="Name"/>
						</div>
						<div className="contact-form-element-container">
							<label>Phone: </label>
							<input className="contact-form-element" name="contact-form-phone" id="contact-form-phone" type="tel" aria-labelledby="Contact form phone" placeholder="Phone number"/>
						</div>
						<div className="contact-form-element-container">
							<label>Email: </label>
							<input className="contact-form-element" name="contact-form-email" id="contact-form-email" type="email" required aria-labelledby="Contact form email" placeholder="your@email.com"/>
						</div>
						<div className="contact-form-element-container">
							<label>Message: </label>
							<textarea className="contact-form-element" name="contact-form-message" id="contact-form-message" rows="6" cols="30" required aria-labelledby="Contact form message"/>
						</div>
						<div className="contact-form-element-container">
							<input id="contact-form-submit" type="submit" required aria-label="Contact form submit" value="Submit"/>
						</div>
					</fieldset>
				</form>
			</section>
	);
}
