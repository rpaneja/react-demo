import React from 'react';
import ReactDOM from 'react-dom';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';

import Popper from "./node_modules/popper.js/dist/popper.min.js";

import {NavBar} from './components/nav/MainNavigation.js';

class ProfilePage extends React.Component {
	render() {
	    return (
	    	<div>
		    	<NavBar />
		      	<div className="container-fluid">
		        	<h1>All About!</h1>
		        	<p>I like movies and blah blah blah blah blah</p>
		      	</div>
	      	</div>
	    );
  	}
}
ReactDOM.render(<ProfilePage />, document.getElementById('app'));