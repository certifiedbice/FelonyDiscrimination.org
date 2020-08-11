import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SubmitOrgForm from './SubmitOrgForm';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<SubmitOrgForm/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<SubmitOrgForm/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});