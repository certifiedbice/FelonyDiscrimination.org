import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import OrgEndorsements from '../../components/orgendorsements/OrgEndorsements';

let orgId='5';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<OrgEndorsements orgId={orgId}/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<OrgEndorsements orgId={orgId}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});