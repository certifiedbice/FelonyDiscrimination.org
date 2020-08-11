import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import EndorsementForm from './EndorsementForm';

let orgId='5';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<EndorsementForm orgId={orgId}/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<EndorsementForm orgId={orgId}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});