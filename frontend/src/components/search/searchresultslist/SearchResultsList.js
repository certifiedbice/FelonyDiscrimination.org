import React,{Component} from 'react'
import SearchResult from '../searchresult/SearchResult';
import './SearchResultsList.css';

export default class SearchResultsList extends Component{
	render(){
		return(
			<section id='search-results'>
				<div>{/*results: total information here*/}</div>
				{this.props.search_results.map((result,index)=><SearchResult key={index} result={result}/>)}
			</section>
		);
	}
}