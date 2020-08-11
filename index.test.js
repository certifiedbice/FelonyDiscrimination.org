import React from 'react';

//======================================================

//import { render } from '@testing-library/react';

//======================================================

import AppRouter from './routers/AppRouter';

//======================================================

import ReactDOM from 'react-dom';

it('renders without crashing',()=>{
	const div=document.createElement('div');
	ReactDOM.render(<AppRouter/>,div);
});

//======================================================

//import { shallow } from 'enzyme';

/*
Unlike the previous smoke test using ReactDOM.render(), 
this test only renders <App> and doesn’t go deeper. 
For example, even if <App> itself renders a <Button> 
that throws, this test will pass. Shallow rendering is 
great for isolated unit tests
*/

// it ('renders without crashing', () => {
  
//   shallow ( <App /> );

// });

//======================================================
