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
            <section id="submit-form-container">
                    <form id="submit-form" name="submit-form" aria-label="Report discrimination form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend><h2>Submit an Organization</h2></legend>
                            <div id="submit-form-instructions">
                                <p>
                                    We invite you to submit organizations into the database, where they can then be reviewed as positive or negative for discrimination. 
                                </p>
                                <p>
                                    We would like to thank you for taking the time to submit an entry, every entry is one step closer to a solution.
                                </p>
                            </div>
                            <div className="submit-form-element-container">
                                <label>Organization name:</label>
                                <input className="submit-form-element" name="org_name" id="submit-form-organization-name" type="text" required aria-labelledby="submit-form-organization-name" placeholder="Name"/>
                            </div>
                            <div className="submit-form-element-container">
                                <label>Organization phone:</label>
                                <input className="submit-form-element" name="org_phone" id="submit-form-organization-phone" type="tel" aria-labelledby="submit-form-organization-phone" placeholder="Organization phone number"/>
                            </div>
                            <div className="submit-form-element-container">
                                <label>Organization street address:</label>
                                <input 
                                    className="submit-form-element" 
                                    name="org_st_addr" 
                                    id="submit-form-organization-street-address" 
                                    type="text" 
                                    required 
                                    aria-labelledby="submit-form-organization-street-address" 
                                    placeholder="Street address"
                                />
                            </div>
                            <div className="submit-form-element-container">
                                <label>Organization City:</label>
                                <input 
                                    className="submit-form-element" 
                                    name="org_city" 
                                    id="submit-form-organization-city" 
                                    type="text" 
                                    required 
                                    aria-labelledby="submit-form-organization-city" 
                                    placeholder="City"
                                />
                            </div>
                            <div className="submit-form-element-container">
                                <label>Organization State:</label>
                                <select className="submit-form-element" name="org_state" id="submit-form-organization-state" required>
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
                            <div className="submit-form-element-container">	
                                <label>Organization Zip code:</label>
                                <input className="submit-form-element" name="org_zipcode" id="submit-form-organization-zip-code" type="text" required aria-labelledby="submit-form-organization-zip-code" placeholder="Zip code"/>
                            </div>
                            <div className="submit-form-element-container">
                                <label>Organization Type:</label>
                                <select className="submit-form-element" name="org_type" id="submit-form-organization-type" required>
                                    <option value="employment" disabled>Employment</option>
                                    <option value="housing">Housing</option>
                                </select>
                            </div>
                            <div className="submit-form-error-container">
                            </div>
                            <div className="submit-form-element-container">
                                <input id="submit-form-submit" type="submit" required aria-label="submit form submit" value="Submit"/>
                            </div>
                        </fieldset>
                    </form>
                </section>
        );
    }
}