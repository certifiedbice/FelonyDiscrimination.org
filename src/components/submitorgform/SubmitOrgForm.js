import React,{Component} from 'react';
import OrgApiService from '../../services/org-api-service'
import './SubmitOrgForm.css';

export default class SubmitOrgForm extends Component{
    state={
        setError:null,
    }
    handleSubmit=e=>{
        e.preventDefault()
        const {org_name,org_phone,org_st_addr,org_city,org_state,org_zipcode,org_type}=e.target;
        OrgApiService.postOrg(org_name.value,org_phone.value,org_st_addr.value,org_city.value,org_state.value,org_zipcode.value,org_type.value)
            .catch(this.state.setError);
    }
    render(){
        return(
            <section id="review-form-container">
                    <form id="review-form" name="review-form" aria-label="Report discrimination form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend><h2>Review an Organization</h2></legend>
                            <div id="review-form-instructions">
                                <p>
                                    We invite you to submit organizations into the database, where they can then be reviewed as positive or negative for discrimination. 
                                </p>
                                <p>
                                    We would like to thank you for taking the time to submit an entry, every entry is one step closer to a solution.
                                </p>
                            </div>
                            <div className="review-form-element-container">
                                <label>Organization name:</label>
                                <input className="review-form-element" name="org_name" id="review-form-organization-name" type="text" required aria-labelledby="review-form-organization-name" placeholder="Name"/>
                            </div>
                            <div className="review-form-element-container">
                                <label>Organization phone:</label>
                                <input className="review-form-element" name="org_phone" id="review-form-organization-phone" type="tel" aria-labelledby="review-form-organization-phone" placeholder="Organization phone number"/>
                            </div>
                            <div className="review-form-element-container">
                                <label>Organization street address:</label>
                                <input 
                                    className="review-form-element" 
                                    name="org_st_addr" 
                                    id="review-form-organization-street-address" 
                                    type="text" 
                                    required 
                                    aria-labelledby="review-form-organization-street-address" 
                                    placeholder="Street address"
                                />
                            </div>
                            <div className="review-form-element-container">
                                <label>Organization City:</label>
                                <input 
                                    className="review-form-element" 
                                    name="org_city" 
                                    id="review-form-organization-city" 
                                    type="text" 
                                    required 
                                    aria-labelledby="review-form-organization-city" 
                                    placeholder="City"
                                />
                            </div>
                            <div className="review-form-element-container">
                                <label>Organization State:</label>
                                <select className="review-form-element" name="org_state" id="review-form-organization-state" required>
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
                            <div className="review-form-element-container">	
                                <label>Organization Zip code:</label>
                                <input className="review-form-element" name="org_zipcode" id="review-form-organization-zip-code" type="text" required aria-labelledby="review-form-organization-zip-code" placeholder="Zip code"/>
                            </div>
                            <div className="review-form-element-container">
                                <label>Organization Type:</label>
                                <select className="review-form-element" name="org_type" id="review-form-organization-type" required>
                                    <option value="Employment" disabled>Employment</option>
                                    <option value="Housing">Housing</option>
                                </select>
                            </div>
                            <div className="review-form-error-container">
                            </div>
                            <div className="review-form-element-container">
                                <input id="review-form-submit" type="submit" required aria-label="Review form submit" value="Submit"/>
                            </div>
                        </fieldset>
                    </form>
                </section>
        );
    }
}