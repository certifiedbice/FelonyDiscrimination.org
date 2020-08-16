import React,{Component} from 'react';

export default class ErrorBoundary extends Component{
	constructor(props){
		super (props)
		this.state={hasError:false}
	}
	static getDerivedStateFromError(error){
		// Update state so the next render will show the fallback UI.
		return {hasError:true};
	}
	componentDidCatch(error,info){
		// Log the error to an error reporting service
		//logErrorToMyService(error,info);
	}
	render(){
		if(this.state.hasError){return(<h2>Could not display this currency.</h2>)}
		return this.props.children;
	  }
}