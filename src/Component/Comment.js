import React, { Component } from "react";
import $ from "jquery";
import "../stylesheet/Comment.css";
import { FcLike } from "react-icons/fc";
import { GoReply } from "react-icons/go";
class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reply: "",
			isReply: false,
			liked: false,
		};
	}
	like = () => {
		if (
			this.props.likes &&
			!this.props.likes.includes(this.props.uid) &&
			!this.state.liked
		) {
			$(
				".like" + this.props.id + "_" + this.props.uid + " .like-svg"
			).css({
				filter: "drop-shadow(0px 0px 2px red)",
				transform: "scale(1.5)",
				opacity: "0",
			});
			$(
				".like" + this.props.id + "_" + this.props.uid + " .liked-svg"
			).css("display", "inline");
			
			this.props.likes.push(this.props.uid);
			this.props.fun.likeComment(this.props.id);
			$(
				".like" + this.props.id + "_" + this.props.uid + "  .number"
			).text(
				parseInt(
					$(
						".like" +
							this.props.id +
							"_" +
							this.props.uid +
							"  .number"
					).text()
				) + 1
			);
			this.setState({ liked: true });
		}
	};
	handleReply = (e) => {
		this.setState({ reply: e.target.value });
	};
	reply() {
		this.setState({ isReply: true });
	}
	onSubmit(e) {
		e.preventDefault();
		this.props.fun.reply(this.props.id, this.state.reply);
	}
	componentDidMount() {
		if (this.props.likes && this.props.likes.includes(this.props.uid)) {
			$(
				".like" + this.props.id + "_" + this.props.uid + " .like-svg"
			).css("opacity", "0");
			$(
				".like" + this.props.id + "_" + this.props.uid + " .liked-svg"
			).css("display", "inline");
			this.setState({ liked: true });
		}
	}
	render() {
		var reply = [];
		if (this.props.reply && !this.state.isReply) {
			this.props.reply.map((r) => {
				reply.push(<div className="reply">{r.reply}</div>);
				return r;
			});
			reply.push(

				<form
					className="form"
					id="form"
					onSubmit={(e) => this.onSubmit(e)}
				>
				<span className="reply-user-name">{this.props.fun.state.user.id} : </span>
				<div className="inputs">
					<input
						type="text"
						className="input-reply"
						onChange={(e) => this.handleReply(e)}
						placeholder="Reply here"
					/>
					<input type="submit" value="Reply" />
					</div>
				</form>
			);
		}
		return (
			<div className="Comment" id={this.props.postno}>
				<div className="Comment-div">
					<span className="user-name">{this.props.user}</span>
					<div className="details">
						<p className="comment">{this.props.comment}</p>
						<p className="details-inner">
							<span
								className={
									"like" +
									this.props.id +
									"_" +
									this.props.uid
								}
								onClick={() => this.like()}
							>
								<FcLike className="like-svg" />
								<FcLike className="liked-svg" />{" "}
								<span className="number">
									{this.props.like}{" "}
								</span>
							</span>
							<span className={"reply" + this.props.id}>
								<GoReply />{" "}
								<span className="number">
									{this.props.reply.length}{" "}
								</span>
							</span>
						</p>
					</div>
				</div>
				<div className="replies">{reply}</div>
			</div>
		);
	}
}

export default Comment;
