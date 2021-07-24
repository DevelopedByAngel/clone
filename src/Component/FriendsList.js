import React, { Component } from "react";
import Friends from "./Friends.js";
class FriendsList extends Component {
	render() {
		if(this.props.users.length<=0)
		{
			alert("No buyers!! Try again later");
		}
		else
		{
			return this.props.users.map((u, i) => {
			return <Friends key={i} id={i} user={u} userStatus={this.props.userStatus} fun={this.props.fun}/>;
		});
		}
	}
		
}

export default FriendsList;
