import React, { Component } from "react";
import "../stylesheet/User.css";
class Friends extends Component {
	click()
	{
		if(this.props.userStatus==="pending")
			this.props.fun.cancelRequest(this.props.user.user);
		else if(this.props.userStatus==="accept")
			this.props.fun.accept(this.props.user.user)
		else if(this.props.userStatus==="unfriend")
			this.props.fun.Unfriend(this.props.user.user)
	}
	render() {
		var buyer = [];
		if (this.props.user.qty) {
			buyer.push(
				<span className="user-name">{this.props.user.user}</span>
			);
			buyer.push(<span className="qty">{this.props.user.qty}</span>);
		} else {
			buyer.push(<span className="user-name">{this.props.user}</span>);
			buyer.push(<span className="qty" onclick={()=>this.click()}>{this.props.userStatus}</span>);
		}
		return (
			<div className="User" id={"name" + this.props.id}>
				<div className="name">{buyer}</div>
			</div>
		);
	}
}

export default Friends;
