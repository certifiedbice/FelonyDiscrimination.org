import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import SiteInfo from '../../components/siteinfo/SiteInfo';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><SiteInfo/></BrowserRouter>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><SiteInfo/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});