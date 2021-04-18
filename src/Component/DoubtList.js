import React, { Component } from "react";
import Doubt from "./Doubt.js";
class DoubtList extends Component {
	render() {
		return (
			<div>
				<span
					style={{
						fontSize: "1.5rem",
						color: "#00997f",
						margin: "1rem",
						fontWeight: "bolder",
					}}
				>
					Post your Question
				</span>
				{this.props.doubts.reverse().map((d, i) => {
					return (
						<Doubt
							fun={this.props.fun}
							user={d.user}
							id={d._id}
							uid={this.props.fun.state.user.id}
							doubt={d.doubt}
							answers={d.answers}
						/>
					);
				})}
			</div>
		);
	}
}

export default DoubtList;
