import React, { Component } from "react";
import $ from "jquery";
import "../stylesheet/ProfileHeader.css";
const ProfileHeader = (props) => {
	const { user, fun } = props;
	var add = [];
	var img;
	if (user.path) {
		img = "http://localhost:3000/" + user.path;
	} else {
		img = "https://i.postimg.cc/t4LMTMx4/blue-user-head-png-18-1.png";
	}
	if (fun.state.route === "profile") {
		add.push(
			<span
				className="pending"
				onClick={() => pending(fun, user.pending)}
			>
				pending <span className="number">{user.pending.length}</span>
			</span>
		);
		add.push(
			<span className="acept" onClick={() => accept(fun, user.request)}>
				accept
				<span className="number">{user.request.length}</span>
			</span>
		);
	}
	return (
		<div className="ProfileHeader">
			<span className="id">{user.id}</span>
			<div className="profile-pic">
				<div className="profile-circle">
					<div className="profile-mask">
						<img src={img} />
					</div>
				</div>
			</div>
			<div className="people">
				<div className="common">
					<span
						className="friends"
						onClick={() => friends(fun, user.friends)}
					>
						friends
						<span className="number">{user.friends.length}</span>
					</span>
					<span className="posts">
						posts
						<span className="number">{user.post.length}</span>
					</span>
				</div>
				<div className="self">{add}</div>
			</div>
		</div>
	);
};
const friends = (fun, user) => {
	console.log("frieds");
	console.log(user);
	fun.updateUsers(user);
	fun.RouteChange("friends");
};
const pending = (fun, user) => {
	console.log("pending");
	fun.updateUsers(user);
	fun.RouteChange("friends");
};
const accept = (fun, user) => {
	console.log("accept");
	fun.updateUsers(user);
	fun.RouteChange("friends");
};
export default ProfileHeader;
