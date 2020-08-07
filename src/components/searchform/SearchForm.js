import React,{Component} from 'react';
import OrgApiService from '../../services/org-api-service';
import './SearchForm.css';

export default class SearchForm extends Component{
    state={setError:null};
    handleSubmit=e=>{
        e.preventDefault()
        const {text}=e.target;
        let searchStr=text.value.toLowerCase();
        OrgApiService.searchOrgs(searchStr)
            .then(res=>
                this.props.storeSearchResults(res)
            )
            .catch(this.state.setError);
    }
    render(){
        return(
            <section id="search-form-container">
                <form id="search-form" name="search-form" aria-label="Search form" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend><h2>Search</h2></legend>
                        <div className="search-form-element-container">
                            <label>Suggested search criteria: Name, City, State, Zipcode.</label>
                            <input className="search-form-element" name="text" id="search-form-input" type="text" required aria-labelledby="Search form email" placeholder="Search"/>
                        </div>
                        <div className="search-form-error-container"></div>
                        <div className="search-form-element-container">
                            <input id="search-form-submit" type="submit" required aria-label="Search form submit" value="Submit"/>
                        </div>
                    </fieldset>
                </form>
            </section>
        );
    }
}