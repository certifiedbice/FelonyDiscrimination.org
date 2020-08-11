import React,{Component} from 'react'
import CommentDate from '../commentdate/CommentDate';
import './Comment.css';

export default class Comment extends Component{
	render(){
        const comment=this.props.comment;
        return(
			<div className='comment-item'>
			    <CommentDate date={comment.date_published}/>
			    <div id='comment-title'><h3>User says: {comment.title}</h3></div>
			    <div id='comment-content'>{comment.content}</div>
			</div>
		);
	}
}