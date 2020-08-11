import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import SearchResult from './SearchResult';

const result={"id":"5","org_name":"brownstone realty ltd","org_phone":"3038328155","org_st_addr":"789 sherman st","org_city":"denver","org_state":"co","org_zipcode":"80203","org_type":"housing"};

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><SearchResult result={result}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><SearchResult result={result}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});