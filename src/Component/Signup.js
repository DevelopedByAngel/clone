import React, { Component } from "react";
import { MdCheck } from "react-icons/md";
import "../stylesheet/Login.css";
import "../stylesheet/Signup.css";
class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "angelfrancis1806@gmail.com",
			id: "angel",
			password: "angel",
		};
	}
	emailchange = (email) => {
		this.setState({ email: email.target.value });
	};
	namechange = (name) => {
		this.setState({ name: name.target.value });
	};
	onsubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:3000/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: this.state.id,
				email: this.state.email,
				password: this.state.password,
			}),
		})
			.then((res) => res.json())
			.then((user) => {
				console.log(user);
				if (user.user._id) {
					this.props.fun.updateuser(user.user);
					this.props.fun.updatePostList(user.post);
					this.props.fun.RouteChange("uploadDP");
				}
			})
			.catch((err) => alert(err));
	};

	render() {
		return (
			<div className="Signup">
				<div className="main">
					<div className="form">
						<form
							className="signupform"
							onSubmit={(e) => this.onsubmit(e)}
						>
							<h1>We will need</h1>
							<span>
								<label htmlFor="name">ID</label>
								<br />
								<input
									type="text"
									name="name"
									pattern="^[^\s]+$"
								></input>
								<br />
								<MdCheck />
							</span>
							<span>
								<label htmlFor="email">Email</label>
								<br />
								<input
									type="email"
									name="email"
									onChange={(e) => this.emailchange(e)}
								></input>
								<br />
							</span>
							<span>
								<label htmlFor="password">Password</label>
								<br />
								<input type="password" name="password"></input>
								<br />
							</span>
							<button
								type="signup-button submit"
								value="Sign Up"
								id="submit"
							>
								Sign Up
							</button>
						</form>
						<button
							className="login-button submit"
							type="submit"
							value="Sign up"
							id="submit"
							onClick={() => this.ch()}
						>
							Login
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
