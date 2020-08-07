import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import './SearchResult.css';

export default class SearchResult extends Component{
	render(){
		const currentOrg=this.props.result;
		return(
			<div className='search-result-item'>
				<div>
					<h2>
						<Link id={currentOrg.id} to={`orgs/${currentOrg.id}`}>{currentOrg.org_name}</Link>
					</h2>
				</div>
				<div>{currentOrg.org_phone}</div>
				<div>{currentOrg.org_st_addr}</div>
				<div>{currentOrg.org_city}, {currentOrg.org_state} {currentOrg.org_zipcode}</div>
			</div>
		);
	}
}