import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Faq from '../pages/faq/Faq';
import Search from '../pages/search/Search';
import SubmitOrg from '../pages/submitorg/SubmitOrg';
import Resources from '../pages/resources/Resources';
import NeedToKnow from '../pages/needtoknow/NeedToKnow';
import Share from '../pages/share/Share';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/SignUp';
import ForgottenLoginInfo from '../pages/forgottenlogininfo/ForgottenLoginInfo';
import UserProfile from '../pages/userprofile/UserProfile';
import OrgProfile from '../pages/orgprofile/OrgProfile';
import NotFound from '../pages/notfound/NotFound';

export default function AppRouter(){
	return(
		<BrowserRouter>
			<Header />
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/faq' component={Faq} />
					<Route exact path='/search' component={Search} />
					<Route exact path='/submitorg' component={SubmitOrg} />
					<Route exact path='/resources' component={Resources} />
					<Route exact path='/needtoknow' component={NeedToKnow} />
					<Route exact path='/share' component={Share} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={SignUp} />
					<Route exact path='/forgottenlogininfo' component={ForgottenLoginInfo} />
					<Route exact path='/userprofile' component={UserProfile} />
					<Route exact path='/orgs/:orgId' component={OrgProfile} />
					<Route component={NotFound} />
				</Switch>
			</main>
		</BrowserRouter>
	);
}