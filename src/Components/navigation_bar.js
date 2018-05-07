
import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import '../App.css';

export const Navbar = (props) => {

	let user;
   	if(Object.keys(props.data).length !== 0){
    		user = (<a href="#" className = "_color"><span className="glyphicon glyphicon-user _user"></span>{props.data.name}</a>);
    }

	return(
			
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>                        
			      </button>
			      <a className="navbar-brand" href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
			    </div>
			    <div className="collapse navbar-collapse" id="myNavbar">
			      <ul className="nav navbar-nav">

			       	<li><Link to='/'>Home</Link></li>
			        <li><Link to='/description'>Description</Link></li>
			        <li><Link to='/profile'>Profile</Link></li>

			      </ul>
			      <ul className="nav navbar-nav navbar-right">
				      <li>{user}</li>
				    </ul>
			    </div>
			  </div>
			</nav>
	)
}

