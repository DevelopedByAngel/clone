import React, { Component } from "react";
import "../stylesheet/User.css";
class Friends extends Component {
	render() {
		var buyer = [];
		if (this.props.user.qty) {
			buyer.push(
				<span className="user-name">{this.props.user.user}</span>
			);
			buyer.push(<span className="qty">{this.props.user.qty}</span>);
		} else {
			buyer.push(<span className="user-name">{this.props.user}</span>);
		}
		return (
			<div className="User" id={"name" + this.props.id}>
				<div className="name">{buyer}</div>
			</div>
		);
	}
}

export default Friends;
