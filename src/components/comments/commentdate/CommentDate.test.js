import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CommentDate from './CommentDate';

const date='2020-08-10 17:08:21';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<CommentDate date={date}/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<CommentDate date={date}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});