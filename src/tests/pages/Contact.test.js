import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Contact from '../../pages/contact/Contact';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Contact/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<Contact/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});