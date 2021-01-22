import React, { Component } from "react";
import $ from "jquery";
import "../stylesheet/Menu.css";
import {BsDropletFill} from "react-icons/bs"
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
			<svg className="drop-svg" id="svg">
			<path d="M0 0 L10 10 L50 10 Z"/>
			</svg>
			<svg height="100vh" width="100vw">
    <defs>
        <clipPath id="svgPath">
            <path fill="#FFFFFF" stroke="#000000" stroke-width="1.5794" stroke-miterlimit="10" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 01-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 005.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0010 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
        </clipPath>
    </defs>
</svg>
		</div>
	);
};

export default Store;
