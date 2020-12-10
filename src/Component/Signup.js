import React, { Component } from "react";
import { MdCheck } from "react-icons/md";
import "../stylesheet/Login.css";
import "../stylesheet/Signup.css";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { BiCheckDouble } from "react-icons/bi";
import $ from "jquery";
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
				<div className="signup-div">
					<div className="form">
						<form
							className="signupform"
							onSubmit={(e) => this.onsubmit(e)}
						>
							<span className="id-input input-span">
								<FaUserAlt className="id-svg svg" />
								<input
									className="input-field"
									type="text"
									required="true"
									placeholder="   "
									name="id"
									pattern="^[^\s]+$"
								></input>
								<label
									onClick={(e) =>
										$(e.target)
											.parent()
											.children("input")
											.focus()
									}
									className="input-label id"
									htmlFor="name"
								>
									user ID
								</label>
							</span>
							<span className="email-input input-span">
								<MdEmail className="email-svg svg" />
								<input
									className="input-field"
									placeholder="   "
									required="true"
									type="email"
									name="email"
									onChange={(e) => this.emailchange(e)}
								></input>
								<label
									onClick={(e) =>
										$(e.target)
											.parent()
											.children("input")
											.focus()
									}
									className="input-label email"
									htmlFor="email"
								>
									Email
								</label>
							</span>
							<span className="password-input input-span">
								<HiOutlineKey className="password-svg svg" />
								<input
									className="input-field"
									placeholder="   "
									type="password"
									name="password"
								></input>
								<label
									onClick={(e) =>
										$(e.target)
											.parent()
											.children("input")
											.focus()
									}
									className="input-label password"
									htmlFor="password"
								>
									Password
								</label>
							</span>
							<span className="check-password-input input-span">
								<BiCheckDouble className="check-svg svg" />
								<input
									className="input-field"
									placeholder="   "
									type="password"
									name="password"
								></input>
								<label
									onClick={(e) =>
										$(e.target)
											.parent()
											.children("input")
											.focus()
									}
									className="input-label password"
									htmlFor="password"
								>
									Confirm Password
								</label>
							</span>
							<button
								className="signup-button submit"
								type="submit"
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
							onClick={() => this.props.ch()}
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
