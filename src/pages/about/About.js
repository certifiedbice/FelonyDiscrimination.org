import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';

export default function About(){
	return(
		<div>
			<h2>Est. 2020:</h2>
			<p>
				This organization sprang from a dire need to address the lack of
				protection afforded to those in posession of a felony record. This
				lack of protection results in homelessness, recidivism, and wasted taxes.
				It's truly appauling that the governments' both state and federal allow this sort
				of blanket discrimination to occur and affect an already at risk segment
				of its citizens.
			</p>
			<p>
				So much time, money and effort have been put into legislation
				like the:
			</p>
			<p>
				<a href='https://www.ada.gov/' target='_blank' rel="noopener noreferrer">
					American's with Disabilities Act
				</a>
			</p> 
			<p>
				and
			</p>
			<p>
				<a href='https://www.justice.gov/crt/fair-housing-act-2' target='_blank' rel="noopener noreferrer">
					The H.U.D. Fair Housing Act
				</a>
			</p>
			<p> 
				Yet, somehow this large and at risk group of the civilian population of this 
				country fall victim to serious discrimination because this legislation doesn't
				offer fair and equal protection them.
			</p>
			<p>
				<Link to='/contact'>Contact Us</Link> If you are interested in contributing or
				have questions or concerns.
			</p>
			<p>
				Take a look at our <Link to='/faq'>FAQ</Link> for frequently asked questions.
			</p>
		</div>
	);
}
