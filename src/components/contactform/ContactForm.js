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
            <form id='contact-form' name='contact-form' aria-label='Contact form' onSubmit={this.handleSubmit}>
					<fieldset>
						<legend><h2 className='contact-h2'>Contact Us</h2></legend>
						<div className='form-element-container'>
							<label htmlFor='contact-form-name'>Name: </label>
							<input id='contact-form-name' name='name' type='text' required aria-labelledby='contact-form-name' placeholder='Name'/>
						</div>
						<div className='form-element-container'>
							<label htmlFor='contact-form-email'>Email: </label>
							<input id='contact-form-email' name='email' type='email' required aria-labelledby='contact-form-email' placeholder='your@email.com'/>
						</div>
						<div className='form-element-container'>
							<label htmlFor='contact-form-message'>Message: </label>
							<textarea id='contact-form-message' name='message' rows='6' cols='30' required aria-labelledby='contact-form-message'/>
						</div>
						<div className='form-element-submit-container'>
							<input id='form-submit' type='submit' required aria-label='form-submit' value='Submit'/>
						</div>
					</fieldset>
				</form>
        );
    }
}