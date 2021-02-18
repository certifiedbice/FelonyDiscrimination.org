import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CommentList from './CommentList';

const comments=[
    {},
    {},
];

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<CommentList comments={comments}/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<CommentList comments={comments}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});