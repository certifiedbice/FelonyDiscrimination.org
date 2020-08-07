import React,{Component} from 'react'
import SearchResult from '../searchresult/SearchResult';
import './SearchResultsList.css';

export default class SearchResultsList extends Component{
	render(){
		return(
			<section id="search-results">
				{this.props.search_results.map((result,index)=><SearchResult id={index} result={result}/>)}
			</section>
		);
	}
}
