import React,{Component} from 'react'
import SearchForm from '../../components/searchform/SearchForm';
import SearchResultsList from '../../components/searchresultslist/SearchResultsList';
import './Search.css';

export default class Search extends Component{

	state={
		search_results:[],
		error:null,
	};

	storeSearchResults=res=>{this.setState({search_results:[...res]})}

	render(){
        return(
			<>
				<SearchForm storeSearchResults={this.storeSearchResults}/>
				<SearchResultsList search_results={this.state.search_results}/>
			</>
		);
	}
}