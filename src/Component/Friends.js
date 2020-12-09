import React, { Component } from "react";
import "../stylesheet/Post.css";
class Friends extends Component {
	render() {
		return (
			<div className="name" id={"name" + this.props.id}>
				<div className="name">
					<span className="user-name">{this.props.user}</span>
				</div>
			</div>
		);
	}
}

export default Friends;
