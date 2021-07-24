import React, { Component } from "react";
import $ from "jquery";
import "../stylesheet/AddProduct.css";
class EditProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			desc: this.props.product.desc,
			name: this.props.product.name,
			price: this.props.product.price,
			qty: this.props.product.qty,
		};
	}
	handleDesc = (desc) => {
		this.setState({
			desc: desc.target.value.replaceAll("\n", " ~ "),
		});
		console.log(this.state,this.props);
	};
	handleName = (name) => {
		this.setState({ name: name.target.value });
	};
	handlePrice = (price) => {
		this.setState({ price: price.target.value });
	};
	handleQty = (qty) => {
		this.setState({ qty: qty.target.value });
	};
	submitted(e) {
		e.preventDefault();
		console.log("editing");
		fetch(this.props.fun.state.api + "/editProduct", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: this.props.product._id,
				user: this.props.fun.state.user.id,
				name: this.state.name,
				desc: this.state.desc,
				price: this.state.price,
				qty: this.state.qty,
				qtyBought: 0,
				isBuy: false,
			}),
		})
			.then((res) => res.json())
			.then((r) => {
				console.log(r);
				document
					.querySelector(".EditProduct")
					.querySelector(".input-desc").value = "";
				document
					.querySelector(".EditProduct")
					.querySelector(".product-name").value = "";
				document
					.querySelector(".EditProduct")
					.querySelector(".price").value = 0;
				document
					.querySelector(".EditProduct")
					.querySelector(".qty").value = 0;
				this.props.fun.product("");
				$(".EditProduct").css("display", "none");
				this.props.fun.RouteChange("store");
			});
	}
	componentDidMount() {
		this.setState({name:this.props.product.name});

	}
	render() {
		console.log(this.props,"fffffffffff",this.state)
		var {name,desc,price,qty}=this.props.product
		
		return (
			<div className="EditProduct" id={this.props.uid}>
				<div className="editproduct-div">
					<form
						className="form"
						id="form"
						onSubmit={(e) => this.submitted(e)}
					>
						<label>Name</label>
						<input
							type="text"
							className="product-name"
							value={name} 
							onChange={(e) => this.handleName(e)}
						/>
						<label>Description</label>
						<textarea
							type="text"
							className="input-desc"
							value={desc}
							onChange={(e) => this.handleDesc(e)}
							placeholder="Enter about your product"
						></textarea>
						<label>Price</label>
						<input
							type="number"
							min="0"
							value={price}
							className="price"
							onChange={(e) => this.handlePrice(e)}
						/>
						<label>Quantity</label>
						<input
							type="number"
							value={qty}
							min="0"
							className="qty"
							onChange={(e) => this.handleQty(e)}
						/>
						<input
							type="submit"
							value="Update"
							className="product-submit"
						/>
					</form>
				</div>
			</div>
		);
	}
}
export default EditProduct;
