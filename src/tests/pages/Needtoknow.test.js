import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NeedToKnow from '../../pages/needtoknow/NeedToKnow';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<NeedToKnow/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<NeedToKnow/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});