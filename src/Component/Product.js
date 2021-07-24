import React, { Component } from "react";
import $ from "jquery";
import "../stylesheet/Product.css";
class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	buy() {
		console.log(this.props.product.qty)
		this.props.fun.updateProduct(this.props.product);
		var qty = prompt("Quantity:");
		if (qty === undefined || qty ===null) {
			console.log("none");
		} else {
			fetch(this.props.fun.state.api + "/editProduct", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					id: this.props.product._id,
					user: this.props.fun.state.user.id,
					desc: this.props.product.desc,
					name: this.props.product.name,
					price: this.props.product.price,
					qty: this.props.product.qty - qty,
					qtyBought: qty,
					isBuy: true,
				}),
			})
				.then((res) => res.json())
				.then((r) => {
					console.log(r);
					this.props.fun.product("");
					this.props.fun.RouteChange("review");
				});
		}
	}
	view() {
		fetch(this.props.fun.state.api + "/getBuyers", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: this.props.product._id,
			}),
		})
			.then((res) => res.json())
			.then((r) => {
				this.props.fun.updateUsers(r);
				this.props.fun.RouteChange("friends");
			});
	}
	delete()
	{
		console.log("delet")
		fetch(this.props.fun.state.api + "/deleteProduct",
		{
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				id:this.props.product._id
			})
		})
		.then((r) =>r.json())
		.then((r) =>
		{
			console.log(r);
			this.props.fun.product("");
		})
	}
	edit() {
		console.log(this.props.product,"PPPPPPPPPPPPPPPP")
		this.props.fun.updateProduct(this.props.product);
		
	}
	review() {
		this.props.fun.updateProduct(this.props.product);
		this.props.fun.RouteChange("review");
	}
	render() {
		var edit = [];
		console.log(this.props.product.date);
		console.log(this.props.product.id, this.props.fun.state.user._id);
		if (this.props.product.id === this.props.fun.state.user._id) {
			edit.push(
				<button
					type="button"
					className="edit-product"
					onClick={() => this.delete()}
				>
					Delete
				</button>
			);
			edit.push(
				<button
					type="button"
					className="view-buyers"
					onClick={() => this.view()}
				>
					View Buyers
				</button>
			);
		} else {
			edit.push(
				<button
					type="button"
					className="buy-product"
					onClick={() => this.buy()}
				>
					Buy
				</button>
			);
		}
		return (
			<div className="Product" id={this.props.product._id}>
				<div className="product">
					<div className="product-name-div">
						<span className="blur-product-name">
							{this.props.product.name}
						</span>
						<span className="product-name">
							{this.props.product.name}
						</span>
					</div>
					<img
						className="product-img"
						alt=""
						src={"data:image/"+this.props.product.img.contentType+";base64,"+this.props.product.img.data.toString('base64')}
					/>
					
					<div className="details">
						<p className="desc">{this.props.product.desc}</p>
					</div>
					<div className="user-name">{this.props.product.user}</div>
					<div className="date">
						{this.props.product.date[0]}-
						{this.props.product.date[1]}-
						{this.props.product.date[2] - 100}
					</div>
					<div className="price">
						Price: {"  "}
						{this.props.product.price}
					</div>
					<div className="qty">
						Quantity: {"  "}
						{this.props.product.qty}
					</div>
					<div className="btn">
						{edit}
						<button
							className="review-btn"
							onClick={() => this.review()}
							value="review"
						>
							Review
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;
