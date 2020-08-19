import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Navigation.css'

export default class Navigation extends Component{
	handleLogoutClick=()=>{
		TokenService.clearAuthToken();
	}
	
	renderLoggedInClass(){
		return 'main-menu-loggedIn'
	}

	renderLoginClass(){
		return 'main-menu-login'
	}
	render(){
		return(
			<nav id='main-menu'>
				<div className='main-menu-button' id='main-menu-home' aria-label='Main menu home'>
					<NavLink className='main-menu-link' activeClassName='is-active' exact to='/'></NavLink>
					<span className='tooltiptext'>Home</span>
				</div>
				<div className='main-menu-button' id='main-menu-about' aria-label='Main menu about'>
					<NavLink className='main-menu-link' activeClassName='is-active' exact to='/about'></NavLink>
					<span className='tooltiptext'>About</span>
				</div>
				<div className='main-menu-button' id='main-menu-search' aria-label='Main menu search'>
					<NavLink className='main-menu-link' activeClassName='is-active' exact to='/search'></NavLink>
					<span className='tooltiptext'>Search</span>
				</div>
				<div className='main-menu-button' id='main-menu-submit' aria-label='Main menu submit'>
					<NavLink className='main-menu-link' activeClassName='is-active' exact to='/submitorg'></NavLink>
					<span className='tooltiptext'>Submit an Organization</span>
				</div>
				<div className='main-menu-button' id='main-menu-resources' aria-label='Main menu resources'>
					<NavLink className='main-menu-link' activeClassName='is-active' exact to='/resources'></NavLink>
					<span className='tooltiptext'>Resources</span>
				</div>
				<div className='main-menu-button' id='main-menu-share'  aria-label='Main menu share'>
					<NavLink className='main-menu-link' activeClassName='is-active' exact to='/share'></NavLink>
					<span className='tooltiptext'>Share</span>
				</div>
				<div 
					className='main-menu-button' 
					id={TokenService.hasAuthToken()?this.renderLoggedInClass():this.renderLoginClass()}  
					aria-label='Main menu login'>
					<NavLink className='main-menu-link' activeClassName='is-active' exact to='/login'></NavLink>
					<span className='tooltiptext'>Login</span>
				</div>
			</nav>
		);
	}
}
