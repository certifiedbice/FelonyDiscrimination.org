import React from 'react';
import {Link} from 'react-router-dom';
import './Resources.css';

export default function Resources(){
	return(
		<div>
			<h2>Resources and Tools</h2>
			<h3>Housing</h3>
            <p><a target='_blank' href='https://docs.google.com/document/d/1rkd2xvzn58M0jcAt1xpd50I4_Rxmp__cGLqWEJvD3EE/edit?usp=sharing'>Need to Know</a></p>
            <p><a target='_blank' href='https://docs.google.com/document/d/1KsRsxBDgV2F4VWNweF9ShYY4JwBFh39QiRYS1b1JzfA/edit?usp=sharing'>Check List</a></p>
            <p><a target='_blank' href='https://docs.google.com/document/d/1vtEaTsTOyBwtyQbe8TloopnY65yJOxlAvUnp-X-r0ok/edit?usp=sharing'>Additional Resources</a></p>
			<p>
				If you would like to submit a resource, please <Link to='/contact'>contact us</Link>.
			</p>
		</div>
	);
}