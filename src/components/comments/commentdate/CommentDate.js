import React,{Component} from 'react'
import './CommentDate.css';

export default class CommentDate extends Component{
	formatDate(dayOfWeek, day, month, year) {
		var daysOfWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		return daysOfWeek[dayOfWeek]+' '+months[month]+' '+day+' '+year;
	}
	render(){
		const date=this.props.date;
		const newDate=new Date(date);
		return(
			<div id='comment-date_published'>
				{
					this.formatDate(
						newDate.getUTCDay(),
						newDate.getUTCDate(),
						newDate.getUTCMonth(),
						newDate.getUTCFullYear()
					)
				}
			</div>
		);
	}
}