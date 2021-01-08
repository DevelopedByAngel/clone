import React, { Component } from "react";
import $ from "jquery";
import "../stylesheet/Menu.css";
import {AiFillAppstore} from "react-icons/ai"
const Menu = (props) => {
	const { route, fun } = props;
	var query = "";
	const ok = () => {
		if ($(".line").css("height") !== "25px") {
			$(".line").css({ height: "25px" });
			$(".dot").css("transform", "translateY(8px)");
			$(".Menu-side").css({
				right: "0vw",
				"box-shadow":
					"-10px 0px 30px 10px rgba(0,0,0,0.6),-100vw 0px 30px 100vw rgba(0,0,0,0.3)",
			});
		} else {
			$(".line").css({ height: "0px" });
			$(".dot:nth-child(1)").css("transform", "translateY(0px)");
			$(".dot:nth-child(2)").css("transform", "translateY(8px)");
			$(".dot:nth-child(3)").css("transform", "translateY(17px)");
			$(".Menu-side").css({
				right: "-50vw",
				"box-shadow": "0px 0px 0px 0px transparent",
			});
		}
	};
	return (
		<div className="Menu">
		<div className="menu-div">
			<div className="feed-button">
			<AiFillAppstore/>
			</div>
			<div className="store-button">
			</div>
			<div className="add-button">
			</div>
			<div className="profile-button">
			</div>			
			<div className="button">
				<button className="menubutton" onClick={() => ok()}>
					<span className="menu">
						<span className="dot" />
						<span className="dot" />
						<span className="dot" />
						<span className="line1 line" />
						<span className="line2 line" />
					</span>
				</button>
			</div>
			</div>
		<div className="Menu-side">

			<p
				className="nav-link Feed"
				onClick={() => {
					ok();
					routeFeed(route, fun);
				}}
			>
				Feed
			</p>
			<p
				className="nav-link Profile"
				onClick={() => {
					ok();
					fun.getUser();
				}}
			>
				Profile
			</p>
			<p
				className="nav-link Hashtag"
				onClick={() => {
					ok();
					route("hashtags");
				}}
			>
				Hashtag
			</p>
			<form
				onSubmit={(e) => {
					ok();
					fun.search(e, "#" + query);
				}}
			>
				<input
					className="search-nav"
					onChange={(e) => (query = e.target.value)}
					type="text"
					required
				/>
			</form>
			<p
				className="nav-link Settings"
				onClick={() => {
					ok();
					route("settings");
				}}
			>
				Settings
			</p>
			<p
				className="nav-link Store"
				onClick={() => {
					ok();
					route("store");
				}}
			>
				Store
			</p>
			</div>
		</div>
	);
};
const routeFeed = (route, fun) => {
	fun.feeds();
};
export default Menu;
