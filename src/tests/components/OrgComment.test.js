import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import OrgComments from '../../components/orgcomments/OrgComments';

let orgId='5';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<OrgComments orgId={orgId}/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<OrgComments orgId={orgId}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});