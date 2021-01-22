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
		</div>
	);
};

export default Store;
