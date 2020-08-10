import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
export default function Home(){
	return(
		<div>
			<h2>Let us make change happen, together.</h2>
			<p>
				This system allows you to submit organizations into the database for the purposes 
				of archiving felon friendly and unfriendly organizations, furthermore you can 
				mark an organization with either a positive or negative endorsement, both 
				of which will be summed, in order to provide a view of the organizations practices. 
				You can also post comments about a particular organization.
			</p>
			<p>
				Read the <Link to='/faq'>FAQ</Link> to learn more.
			</p>
			<h3>Our Mission</h3>
			<p>
				Combating the rampant discrimination against persons with a felony history.
				If you have been the victim of this type of blanket policy, we invite you 
				to report that organization here. Opposite that, if you have been given an 
				opportunity, we invite you to recommend that organization here.
			</p>
			<h3>Contribute</h3>
			<p>
				Currently we are seeking contributions to expand this project, you can Contribute
				here: <a target='_blank' href='https://www.gofundme.com/f/felonydiscriminationorg?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1'>Fundraising</a>.
			</p>
			<p>
				If you are interested in donating some of your skills and time to help further this 
				project, please <Link to='/contact'>contact us</Link>.
			</p>
		</div>
	);
}
