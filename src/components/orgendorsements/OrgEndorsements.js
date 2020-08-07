import React,{Component} from 'react'
import OrgApiService from '../../services/org-api-service';
import './OrgEndorsements.css';

export default class OrgEndorsements extends Component{
    state={setError:null};
    componentDidMount(){
        //set endorsements in state for render
    }
    handleSubmit=e=>{
        e.preventDefault()
        const {endorsement}=e.target;
        // Have to add in userId when user login system is implemented.
        OrgApiService.postOrgEndorsements(/*this.props.userId,*/this.props.orgId,endorsement)
            .catch(this.state.setError);
    }
    render(){
        return(
            <div id='organization-endorsement-form-container'>
                <form id="endorsement-form" name="endorsement-form" aria-label="Endorsement form" onSubmit={this.handleSubmit}>
                    <legend>Submit an Endorsement</legend>
                    <div className="endorsement-form-element-container">
                        <label>Endorse:</label>
                        <select className="endorsement-form-element" name="endorsement" id="endorsement-form-select" required>
                            <option value='positive'>Positive</option>
                            <option value='negative'>Negative</option>
                        </select>
                    </div>
                </form>
            </div>
        );
	}
}