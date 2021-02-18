import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import EndorsementsApiService from '../../services/endorsements-api-service';
import TokenService from '../../services/token-service';
import './EndorsementForm.css';

export default class EndorsementForm extends Component{
    
    state={error:null};
    
    renderEndorsementForm(){
        return(
            <form id='endorsement-form' name='endorsement-form' aria-label='Endorsement form' onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend><h3>Submit an Endorsement</h3></legend>
                        <div className='form-element-container'>
                            <label htmlFor='endorsement-form-select'>Choose your Endorsement:</label>
                            <select id='endorsement-form-select' name='endorsement' required aria-labelledby='endorsement-form-select'>
                                <option value='1'>Positive</option>
                                <option value='0'>Negative</option>
                            </select>
                        </div>
                        <div className='form-error-container'></div>
                        <div className='form-element-container'>
                            <input id='form-submit' type='submit' required aria-label='form-submit' value='Submit'/>
                        </div>
                    </fieldset>
                </form>
        );
    }
    
    renderEndorsementLoginMessage(){
        return(<div id='endorsement-login-message'><h3>You must <Link to='/login'>log in</Link> to submit endorsements</h3></div>);
    }
    
    handleSubmit=e=>{
        e.preventDefault()
        const {endorsement}=e.target;
        // Need to code a check against the endorsements table to look for existing user_id/org_id endorsement
        // return a notification that the user has already submitted an endorsement if exists
        EndorsementsApiService.postOrgEndorsements(this.props.orgId,endorsement.value)
            .then(res=>this.props.updateEndorsements(endorsement.value))
            .catch(this.state.error);
    }
    
    render(){
        return(
            <div id='form-container'>
                {TokenService.hasAuthToken()?this.renderEndorsementForm():this.renderEndorsementLoginMessage()}
            </div>
        );
	}

}