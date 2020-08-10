import React,{Component} from 'react'
import OrgApiService from '../../services/org-api-service';
import './OrgComments.css';

export default class OrgComments extends Component{
    state={setError:null};
    componentDidMount(){
        //set comments in state for render
    }
    handleSubmit=e=>{
        e.preventDefault()
        const {comment}=e.target;
        // Have to add in userId when user login system is implemented.
        OrgApiService.postOrgComments(/*this.props.userId,*/this.props.orgId,comment)
            .catch(this.state.setError);
    }
    render(){
        return(
            <div className="organization-comment-form-container">
                <form id="comment-form" name="comment-form" aria-label="Comment form" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend><h3>Submit a Comment</h3></legend>
                        <div className="comment-form-element-container">
                            <label>Message:</label>
                            <textarea className="comment-form-element" name="comment" id="comment-form-message" rows="6" cols="27" required aria-labelledby="review-form-message"/>
                        </div>
                        <div className="comment-form-error-container"></div>
                        <div className="comment-form-element-container">
                            <input id="comment-form-submit" type="submit" required aria-label="comment form submit" value="Submit"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
	}
}