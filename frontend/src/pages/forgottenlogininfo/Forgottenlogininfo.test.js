import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ForgottenLoginInfo from './ForgottenLoginInfo';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<ForgottenLoginInfo/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<ForgottenLoginInfo/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});