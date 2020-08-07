import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import SearchResultsList from '../../components/searchresultslist/SearchResultsList';

const search_results=[{"id":"5","org_name":"brownstone realty ltd","org_phone":"3038328155","org_st_addr":"789 sherman st","org_city":"denver","org_state":"co","org_zipcode":"80203","org_type":"housing"}]

let x=0;

let id=()=>{x+=1;return x;}

// Need to apply a fix for this as the one present isn't working

// console.error node_modules/react/cjs/react.development.js:315       
//       Warning: Each child in a list should have a unique "key" prop.    
      
//       Check the render method of `SearchResultsList`. See https://fb.me/react-warning-keys for more information.
//           in SearchResult (at SearchResultsList.js:9)
//           in SearchResultsList (at SearchResultsList.test.js:15)        
//           in Router (created by BrowserRouter)
//           in BrowserRouter (at SearchResultsList.test.js:15)

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><SearchResultsList id={id} search_results={search_results}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><SearchResultsList id={id} search_results={search_results}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});