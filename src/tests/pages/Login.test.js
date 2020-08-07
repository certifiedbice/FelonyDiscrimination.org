import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Login from '../../pages/login/Login';

it('renders without crashing',()=>{
    const section=document.createElement('section');
    ReactDOM.render(<BrowserRouter><Login/></BrowserRouter>,section);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><Login/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});