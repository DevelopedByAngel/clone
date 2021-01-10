import React, { Component } from "react";
import $ from "jquery";
class UserInList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "",
			ok: "",
		};
	}
	click(status) {
		if (status == "Request") {
			this.props.fun.request(this.props.user.id);
			$(".status" + this.props.user.id).text("⚠️ ");
		} else if (status == "Accept Request") {
			this.props.fun.acceptRequest(this.props.user.id);
			$(".status" + this.props.user.id).text("⚠️ ");
		} else if (status == "Unfriend") {
			var a = window.confirm("remove from friends");
			if (a) {
				this.props.fun.Unfriend(this.props.user.id);
				$(".status" + this.props.user.id).text("⚠️ ");
			}
		} else if (status == "Request Pending") {
			this.props.fun.cancelRequest(this.props.user.id);
			$(".status" + this.props.user.id).text("⚠️ ");
		} else {
			console.log("unkonwn");
		}
	}
	componentDidMount() {}
	componentDidUpdate(prevProps) {
		if (prevProps.user != this.props.user) this.setState({ ok: "ok" });
	}
	render() {
		var status = "";
		if (this.props.user.id === this.props.userID) status = "Me";
		else if (
			this.props.user.friends &&
			this.props.user.friends.length > 0 &&
			this.props.user.friends.includes(this.props.userID)
		)
			status = "Unfriend";
		else if (
			this.props.user.request &&
			this.props.user.request.length > 0 &&
			this.props.user.request.includes(this.props.userID)
		)
			status = "Request Pending";
		else if (
			this.props.user.pending &&
			this.props.user.pending.length > 0 &&
			this.props.user.pending.includes(this.props.userID)
		)
			status = "Accept Request";
		else status = "Request";
		return (
			<div>
				<span
					onClick={() =>
						this.props.fun.viewProfile(this.props.user.id)
					}
				>
					{this.props.user.id}{" "}
				</span>
				<span
					className={"status" + this.props.user.id}
					onClick={() =>
						this.click($(".status" + this.props.user.id).text())
					}
				>
					{status}
				</span>
			</div>
		);
	}
}

export default UserInList;
