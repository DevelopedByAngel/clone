import React, { Component } from "react";
import $ from "jquery";
import "../stylesheet/Menu.css";
const Store = (props) => {
	return (
		<div className="Store">
			<div className="auth-div">
				<form className="auth-form">
					<input type="text" className="auth" />
				</form>
			</div>
			<div className="drop">
			</div>
			<svg className="drop-svg" id="svg">
			<path d="M0 0 L10 10 L50 30 Z"
			</svg>
		</div>
	);
};

export default Store;
