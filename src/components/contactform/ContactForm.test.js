import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContactForm from './ContactForm';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<ContactForm/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<ContactForm/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});