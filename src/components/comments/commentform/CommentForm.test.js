import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CommentForm from './CommentForm';

let orgId='5';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<CommentForm orgId={orgId}/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<CommentForm orgId={orgId}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});