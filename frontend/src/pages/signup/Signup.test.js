import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SignUp from './SignUp';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<SignUp/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<SignUp/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});