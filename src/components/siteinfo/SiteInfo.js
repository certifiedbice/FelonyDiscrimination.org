import React from 'react';
import {Link} from 'react-router-dom';
import './SiteInfo.css';
export default function Header(){
	return(
		<div id="site-info">
				<div id="site-info-logo" aria-label="FelonyDiscrimination.org logo">
					<Link className='site-info-link' to='/'></Link>
				</div>
				<div id="site-info-title">
					<Link className='site-info-link' to='/'><h1>FelonyDiscrimination.org</h1></Link>
				</div>
			</div>
	);
}
