import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import EndorsementForm from './EndorsementForm';

let orgId='5';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><EndorsementForm orgId={orgId}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><EndorsementForm orgId={orgId}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});