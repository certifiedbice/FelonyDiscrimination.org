import React,{Component} from 'react'
import Comment from '../comment/Comment';
import './CommentList.css';

export default class CommentList extends Component{
	render(){
		return(
			<div id="comment-list-container">
				<div>{/*comments: total information here*/}</div>
				{this.props.comments.map((comment,index)=><Comment key={index} comment={comment}/>)}
            </div>
		);
	}
}


                