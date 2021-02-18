import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import SubmitOrgForm from './SubmitOrgForm';

it('renders without crashing',()=>{
    const section=document.createElement('section');
    ReactDOM.render(<BrowserRouter><SubmitOrgForm/></BrowserRouter>,section);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><SubmitOrgForm/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});