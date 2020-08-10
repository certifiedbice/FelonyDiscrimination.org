import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import './SearchResult.css';

export default class SearchResult extends Component{
	render(){
		const currentOrg=this.props.result;
		return(
			<Link className='search-result-link' id={currentOrg.id} to={`orgs/${currentOrg.id}`}>
				<div className='search-result-item'>
					<div id='org-name'><h2>{currentOrg.org_name}</h2></div>
				</div>
			</Link>
		);
	}
}