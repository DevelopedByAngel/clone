import React, { Component } from "react";
import Review from "./Review.js";

class ReviewList extends Component {
	render() {
		return this.props.reviews.reverse().map((d, i) => {
			return (
				<Review
					fun={this.props.fun}
					key={d._id}
					user={d.user}
					id={d._id}
					uid={this.props.fun.state.user.id}
					comment={d.review}
					index={this.props.fun.state.product._id + "_" + i}
				/>
			);
		});
	}
}

export default ReviewList;
