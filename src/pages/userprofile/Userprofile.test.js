import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UserProfile from './UserProfile';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<UserProfile/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<UserProfile/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});