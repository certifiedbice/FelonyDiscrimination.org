import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter'

it('renders without crashing',()=>{
    const main=document.createElement('main');
    ReactDOM.render(<AppRouter/>,main);
});