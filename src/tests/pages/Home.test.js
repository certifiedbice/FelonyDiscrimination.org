import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Home from '../../pages/home/Home';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><Home/></BrowserRouter>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><Home/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});