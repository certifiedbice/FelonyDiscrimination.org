import React from 'react';
import {Link} from 'react-router-dom';
import './Resources.css';

export default function Resources(){
	return(
		<div>
			<h2>Resources Page</h2>
            <Link to='/needtoknow'>Need to Know</Link>
		</div>
	);
}