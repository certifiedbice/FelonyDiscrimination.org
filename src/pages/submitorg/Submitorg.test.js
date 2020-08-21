import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import SubmitOrg from './SubmitOrg';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><SubmitOrg/></BrowserRouter>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><SubmitOrg/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});