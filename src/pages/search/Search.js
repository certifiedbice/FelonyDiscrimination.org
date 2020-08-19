import React,{Component} from 'react'
import SearchForm from '../../components/search/searchform/SearchForm';
import SearchResultsList from '../../components/search/searchresultslist/SearchResultsList';
import './Search.css';

export default class Search extends Component{

	state={
		search_results:[],
		error:null,
	};

	storeSearchResults=res=>{
		if(res.length>0){
			this.setState({search_results:[...res]})
		}
        else{
			this.setState({error:'No results found'})
		}
	}

	render(){
        return(
			<>
				<SearchForm storeSearchResults={this.storeSearchResults} searchMessage={this.state.error}/>
				<SearchResultsList search_results={this.state.search_results}/>
			</>
		);
	}
}