import React from 'react';
import Navigation from '../navigation/Navigation';
import SiteInfo from '../siteinfo/SiteInfo';
import './Header.css';

export default function Header(){
	return(
		<header>
			<SiteInfo/>
			<Navigation/>
		</header>
	);
}
