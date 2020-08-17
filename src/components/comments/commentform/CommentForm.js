import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import CommentsApiService from '../../../services/comments-api-service';
import TokenService from '../../../services/token-service';
import './CommentForm.css';

export default class CommentForm extends Component{
    state={error:null};
    renderCommentForm(){
        return(
            <form id="comment-form" name="comment-form" aria-label="Comment form" onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend><h3>Submit a Comment</h3></legend>
                        <div className="comment-form-element-container">
                            <label>Title:</label>
                            <input className="comment-form-element" name="title" id="comment-form-input" type="text" required aria-labelledby="Comment form email" placeholder="Search"/>
                        </div>
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
        );
    }
    renderCommentLoginMessage(){
        return(<div id='comment-login-message'><h3>You must <Link to='/login'>log in</Link> to submit comments</h3></div>);
    }
    handleSubmit=e=>{
        e.preventDefault()
        const {title,comment}=e.target;
        // Have to add in userId when user login system is implemented.
        CommentsApiService.postOrgComment(this.props.orgId,title.value,comment.value)
            .then(res=>this.props.updateComments(this.props.orgId))
            .catch(this.state.error);
    }
    render(){
        return(
            <div className="organization-comment-form-container">
                {TokenService.hasAuthToken()?this.renderCommentForm():this.renderCommentLoginMessage()}
            </div>
        );
	}
}