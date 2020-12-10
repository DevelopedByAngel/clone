import React, { Component } from "react";
import Signup from "./Signup.js";
import $ from "jquery";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import "../stylesheet/Login.css";
import { HiOutlineKey } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			password: "",
			loading: false,
		};
	}
	emailchange = (email) => {
		this.setState({ id: email.target.value });
	};
	passwordChange = (password) => {
		this.setState({ password: password.target.value });
	};
	onsubmit = (e) => {
		this.setState({ loading: true });
		$("#login-text").text("");
		e.preventDefault();
		this.props.fun.login(this.state.id, this.state.password);
		setTimeout(() => {
			$("#login-text").text("Login");
			this.setState({ loading: false });
		}, 4000);
	};
	ch() {
		if ($(".overlay").css("bottom") == "0px") {
			$(".overlay").css("height", "100vh");
			// $("ellipse").attr({ rx: "0", ry: "0" });
			$("ellipse").css({
				transform: " rotateZ(0deg)",
			});

			setTimeout(() => {
				$(".overlay").css({
					height: "60vh",
					top: "0px",
					bottom: "unset",
				});
				// $("ellipse").attr({ rx: "280", ry: "280" });
				$(".signup-div").css({ display: "flex" });
				$(".login-div").css({ display: "none" });
			}, 300);
		} else {
			$(".overlay").css("height", "100vh");
			// $("ellipse").attr({ rx: "0", ry: "0" });
			$("ellipse").css({
				transform: " rotateZ(360deg)",
			});

			setTimeout(() => {
				$(".overlay").css({
					height: "60vh",
					top: "unset",
					bottom: "0px",
				});
				$(".signup-div").css({ display: "none" });
				$(".login-div").css({ display: "flex" });
				// $("ellipse").attr({ rx: "280", ry: "280" });
			}, 300);
		}
	}
	render() {
		return (
			<div className="Login">
				<div className="main">
					<div className="overlay">
						<svg className="circlesvg" height="40vh" width="100%">
							<defs>
								<linearGradient
									id="grad1"
									x1="0%"
									y1="100%"
									x2="0%"
									y2="0%"
								>
									<stop
										offset="0%"
										style={{
											"stop-color": "rgb(58,156,126)",
											"stop-opacity": "1",
										}}
									/>
									<stop
										offset="100%"
										style={{
											"stop-color": "rgb(176,241,0)",
											"stop-opacity": "1",
										}}
									/>
								</linearGradient>
								<filter
									id="f1"
									x="0"
									y="0"
									width="200%"
									height="200%"
								>
									<feOffset
										result="offOut"
										in="SourceBackground"
										dx="0"
										dy="10"
									/>
									<feGaussianBlur
										result="blurOut"
										in="offOut"
										stdDeviation="10"
									/>
									<feBlend
										in="SourceGraphic"
										in2="blurOut"
										mode="normal"
									/>
								</filter>
							</defs>
							<ellipse
								cx="50%"
								cy="0%"
								rx="320"
								ry="320"
								filter="url(#f1)"
								fill="url(#grad1)"
							/>
						</svg>
					</div>

					<div className="login-div">
						<div className="form">
							<form
								className="loginform"
								onSubmit={(e) => this.onsubmit(e)}
							>
								<span className="id-input input-span">
									<FaUserAlt className="id-svg svg" />
									<input
										className="input-field"
										type="text"
										id="email"
										placeholder="   "
										required="true"
										name="id"
										pattern="^[a-zA-Z0-9._]+$"
										spellcheck="false"
										onChange={(e) => this.emailchange(e)}
									></input>
									<label
										onClick={(e) =>
											$(e.target)
												.parent()
												.children("input")
												.focus()
										}
										className="input-label id"
										htmlFor="email"
									>
										User ID
									</label>
									<br />
								</span>
								<span className="password-input input-span">
									<HiOutlineKey className="password-svg svg" />
									<input
										className="input-field"
										type="password"
										placeholder="  "
										required="true"
										id="password"
										name="password"
										onChange={(e) => this.passwordChange(e)}
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
									<br />
								</span>
								<button
									className="login-button submit"
									type="submit"
									required="true"
									value="Login"
									id="submit"
								>
									<span
										className="inner-text"
										id="login-text"
									>
										Login
									</span>
									<ClipLoader
										className="loader"
										size="1rem"
										color="rgb(252 255 236)"
										loading={this.state.loading}
									/>
								</button>
							</form>
							<button
								className="signup-button submit"
								type="submit"
								value="Sign up"
								id="submit"
								onClick={() => this.ch()}
							>
								Sign Up
							</button>
						</div>
					</div>
					<Signup fun={this.props.fun} ch={this.ch} />
				</div>
			</div>
		);
	}
}

export default Login;
