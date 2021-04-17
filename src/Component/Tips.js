import { React, Component } from "react";
import "../stylesheet/Tips.css";
class Tips extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="tips-div">
				<span className="tips">
					1.When summer gets cranked up, certain vegetable garden
					crops naturally outshine others. Here is a compilation of
					hot-weather all-stars corn, cucumbers, melons, peppers,
					tomatoes, and squash{" "}
				</span>
				<span className="tips">
					2.The crop type: crops like maize or sugarcane need more
					water than crops like millet or sorghum
				</span>
				<span className="tips">
					3.Panchagavya is known to boost immunity and promote plant
					growth.
				</span>
				<span className="tips">
					4.After cultivation of corn cultivate turmeric for better
					yields
				</span>
				<span className="tips"> 5. stove ash – potassium </span>
				<span className="tips">
					6. banana tree is drought tolerant{" "}
				</span>
				<span className="tips">
					7. Avoid planting long aged saplings near wells and power
					poles{" "}
				</span>
				<span className="tips">
					8. Do not burn unwanted material on the farm land so that
					the earthworms there will die.{" "}
				</span>
				<span className="tips">
					9. Sometimes rose plant’s leaves turn yellow .it is advised
					to cut those yellow leaves
				</span>
				<span className="tips">
					10.Rose plants must me maintained in such a way that they
					don’t grow too tall else they don’t flower
				</span>
			</div>
		);
	}
}
export default Tips;
