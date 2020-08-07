import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Share from '../../pages/Share/Share';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Share/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<Share/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});