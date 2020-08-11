import React,{Component} from 'react'
import EndorsementsApiService from '../../services/endorsements-api-service';
import './EndorsementForm.css';

export default class EndorsementForm extends Component{
    state={setError:null};
    handleSubmit=e=>{
        e.preventDefault()
        const {endorsement}=e.target;
        // Have to add in userId when user login system is implemented.
        // Need to code a check against the endorsements table to look for existing user_id/org_id endorsement
        // return a notification that the user has already submitted an endorsement if exists
        EndorsementsApiService.postOrgEndorsements(69,this.props.orgId,endorsement.value)
            .then(res=>this.props.updateEndorsements(endorsement.value))
            .catch(this.state.setError);
    }
    render(){
        return(
            <div id='organization-endorsement-form-container'>
                <form id="endorsement-form" name="endorsement-form" aria-label="Endorsement form" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend><h3>Submit an Endorsement</h3></legend>
                        <div className="endorsement-form-element-container">
                            <label>Choose your Endorsement:</label>
                            <select className="endorsement-form-element" name="endorsement" id="endorsement-form-select" required>
                                <option value='1'>Positive</option>
                                <option value='0'>Negative</option>
                            </select>
                        </div>
                        <div className="endorsement-form-error-container"></div>
                        <div className="endorsement-form-element-container">
                            <input id="endorsement-form-submit" type="submit" required aria-label="endorsement form submit" value="Submit"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
	}
}