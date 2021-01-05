import React, { Component } from "react";
import "../stylesheet/Addcomment.css";
import $ from "jquery";
import { IoSend } from "react-icons/io5";
class Addcomment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: "",
		};
	}
	handleCaptions = (c) => {
		this.setState({ comment: c.target.value });
	};
	submitted(e) {
		$('.Addcomment .svg').css({"left":"20vw"})
		e.preventDefault();
		this.props.fun.comment(this.state.comment);
	}
	render() {
		return (
			<div className="Addcomment">
							<span className="user-name">{this.props.fun.state.user.id} : </span>

				<form
					className="form"
					id="form"
					onSubmit={(e) => this.submitted(e)}
				>	
					<input
						type="text"
						className="input-comment"
						required="true"
						onChange={(e) => this.handleCaptions(e)}
						placeholder="Your thoughts here"
					/>
					<IoSend
						className="send-svg svg"
						onClick={() => {
							$('.Addcomment .svg').css({"left":"20vw"})
							$('.Addcomment input[type="submit"]').click();
						}}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default Addcomment;
