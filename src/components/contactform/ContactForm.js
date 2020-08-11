import React,{Component} from 'react';
import ContactApiService from '../../services/contact-api-service';
import './ContactForm.css';

export default class SearchForm extends Component{
    state={setError:null};
    handleSubmit=e=>{
        e.preventDefault()
        const {name,email,message}=e.target;
        ContactApiService.sendMail(name.value,email.value,message.value)
            // .then(res=>
            //     this.props.storeSearchResults(res)
            // )
            .catch(this.state.setError);
    }
    render(){
        return(
            <form id="contact-form" name="contact-form" aria-label="Contact form" onSubmit={this.handleSubmit}>
					<fieldset>
						<legend><h2>Contact Us</h2></legend>
						<div className="contact-form-element-container">
							<label>Name: </label>
							<input className="contact-form-element" name="name" id="contact-form-name" type="text" required aria-labelledby="Contact form name" placeholder="Name"/>
						</div>
						<div className="contact-form-element-container">
							<label>Email: </label>
							<input className="contact-form-element" name="email" id="contact-form-email" type="email" required aria-labelledby="Contact form email" placeholder="your@email.com"/>
						</div>
						<div className="contact-form-element-container">
							<label>Message: </label>
							<textarea className="contact-form-element" name="message" id="contact-form-message" rows="6" cols="30" required aria-labelledby="Contact form message"/>
						</div>
						<div className="contact-form-element-container">
							<input id="contact-form-submit" type="submit" required aria-label="Contact form submit" value="Submit"/>
						</div>
					</fieldset>
				</form>
        );
    }
}