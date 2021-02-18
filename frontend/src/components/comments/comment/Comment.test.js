import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Comment from './Comment';

const comment={};

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Comment comment={comment}/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<Comment comment={comment}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});