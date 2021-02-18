import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Faq from './Faq';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Faq/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<Faq/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});