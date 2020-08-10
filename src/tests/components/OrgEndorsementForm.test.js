import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import OrgEndorsementsForm from '../../components/orgendorsementsform/OrgEndorsementsForm';

let orgId='5';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<OrgEndorsementsForm orgId={orgId}/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<OrgEndorsementsForm orgId={orgId}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});