import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import OrgProfile from './OrgProfile';

let match={params:{orgId:'5'}};

it('renders without crashing',()=>{
    const section=document.createElement('section');
    ReactDOM.render(<BrowserRouter><OrgProfile match={match}/></BrowserRouter>,section);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><OrgProfile match={match}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});