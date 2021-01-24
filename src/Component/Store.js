import React, { Component } from "react";
import $ from "jquery";
import "../stylesheet/Menu.css";
import {BsDropletFill} from "react-icons/bs"
setInterval(function()
{

},250)
const Store = (props) => {
	return (
		<div className="Store">
			<div className="auth-div">
				<form className="auth-form">
					<input type="text" className="auth" />
				</form>
			</div>
			<div className="drop">
			<BsDropletFill/>
			</div>
			<svg style={{"transition":"all 0.25s linear"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,85.3C672,85,768,139,864,138.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
			
		</div>
	);
};

export default Store;
