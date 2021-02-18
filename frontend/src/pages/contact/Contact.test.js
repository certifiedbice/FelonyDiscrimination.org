import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Contact from './Contact';

it('renders without crashing',()=>{
    const section=document.createElement('section');
    ReactDOM.render(<Contact/>,section);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<Contact/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});