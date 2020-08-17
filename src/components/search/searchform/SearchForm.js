import React,{Component} from 'react';
import OrgApiService from '../../../services/org-api-service';
import './SearchForm.css';

export default class SearchForm extends Component{
    
    state={error:null};
    
    handleSubmit=e=>{
        e.preventDefault()
        const {text}=e.target;
        let searchStr=text.value.toLowerCase();
        OrgApiService.searchOrgs(searchStr)
            .then(res=>{
                this.props.storeSearchResults(res)
            })
            .catch(this.state.error);
    }
    
    render(){
        return(
            <section id='form-container'>
                <form id='search-form' name='search-form' aria-label='Search form' onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend><h2>Search</h2></legend>
                        <div className='form-element-container'>
                            <label htmlFor='form-input'>Search by: Name, City, State, Zipcode.</label>
                            <input id='form-input' name='text' type='text' required aria-labelledby='form-input' placeholder='Search'/>
                        </div>
                        <div className='form-error-container'>{this.props.searchMessage}</div>
                        <div className='form-element-submit-container'>
                            <input id='form-submit' type='submit' required aria-label='form-submit' value='Submit'/>
                        </div>
                    </fieldset>
                </form>
            </section>
        );
    }
}