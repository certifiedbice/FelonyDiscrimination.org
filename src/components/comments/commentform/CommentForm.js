import React,{Component} from 'react'
import CommentsApiService from '../../../services/comments-api-service';
import './CommentForm.css';

export default class CommentForm extends Component{
    state={setError:null};
    componentDidMount(){
        //set comments in state for render
    }
    handleSubmit=e=>{
        e.preventDefault()
        const {title,content}=e.target;
        // Have to add in userId when user login system is implemented.
        CommentsApiService.postOrgComment(69,this.props.orgId,title.value,content.value)
            .then(res=>this.props.updateComments(this.props.orgId))
            .catch(this.state.setError);
    }
    render(){
        return(
            <div className="organization-comment-form-container">
                <form id="comment-form" name="comment-form" aria-label="Comment form" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend><h3>Submit a Comment</h3></legend>
                        <div className="comment-form-element-container">
                            <label>Title:</label>
                            <input className="comment-form-element" name="title" id="comment-form-input" type="text" required aria-labelledby="Comment form email" placeholder="Search"/>
                        </div>
                        <div className="comment-form-element-container">
                            <label>Message:</label>
                            <textarea className="comment-form-element" name="content" id="comment-form-message" rows="6" cols="27" required aria-labelledby="review-form-message"/>
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