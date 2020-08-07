import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SubmitOrg from '../../pages/submitorg/SubmitOrg';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<SubmitOrg/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<SubmitOrg/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});