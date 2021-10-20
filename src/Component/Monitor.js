import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../stylesheet/Monitor.css";
import { BiHelpCircle } from "react-icons/bi";
import {GrFormClose} from "react-icons/gr";
var timer = null;
const Monitor = (props) => {
	const { auth,fun } = props;
	console.log(fun.state.auth);

	const [auto, setAuto] = useState(false);
	const [waterlevel, setWaterlevel] = useState(0);
	const [prevWaterlevel, setPrevWaterlevel] = useState(0);
	const [temp, setTemp] = useState(0);
	const [motor, setMotor] = useState(false);
	const [pump, setPump] = useState("");
	const [modal, setModal]=useState(false);
	const getData = async () => {
		fetch("http://blynk-cloud.com/" + auth + "/project")
			.then((res) => res.json())
			.then((project) => {
				var waterRaw = project.widgets[1].value;
				console.log(project);
				const water =
					waterRaw < 50 ? waterRaw : parseFloat(waterRaw) + 30;
				setPrevWaterlevel(waterlevel);
				setWaterlevel(water);
				const temp = Math.round(project.widgets[2].value);
				setTemp(temp);
				setPump(project.widgets[4].value);
				setMotor(project.widgets[3].value == "1" ? true : false);
			})
			.catch(err => console.error(err));
		// fetch("http://blynk-cloud.com/" + auth + "/get/V1")
		// .then((data) => data.json())
		// .then((data) => {
		// 	console.log(data)
		// 	const temp = Math.round(data[0]);
		// 	setTemp(temp);
		// });
		console.log("okay");
	};
	useEffect(()=>
	{
		console.log("mm");
		if(!modal)
			$(".help-cover").css("display", "none");
		else
			$(".help-cover").css("display", "flex");
	},[modal])
	useEffect(() => {
		console.log("motor" + motor);
		if (motor) {
			$(".Monitor .AutoMotor").css("background", "#4dd0e1");
		} else {
			$(".Monitor .AutoMotor").css("background", "#a9a9a9");
		}
	}, [motor]);
	useEffect(() => {
		if (auto) {
			start();
			$(".Monitor .auto").css("filter", "brightness(1)");
		} else {
			stop();
			$(".Monitor .auto").css("filter", "brightness(0.8)");
		}
	}, [auto]);
	function start() {
		timer = setInterval(
			() => {
				getData().then(() => {
					return null;
				});
			},
			10 * 1000,
			0
		);
	}
	function stop() {
		clearInterval(timer);
	}
	const autoMotor = () => {
		if (motor) {
			fetch(
				"http://blynk-cloud.com/" + auth + "/update/D4?value=1"
			).then((response) => console.log(response));
		} else {
			fetch(
				"http://blynk-cloud.com/" + auth + "/update/D4?value=0"
			).then((response) => console.log(response));
		}
		setMotor(!motor);
	};
	useEffect(() => {
		console.log(prevWaterlevel + "->" + waterlevel);
		if (waterlevel <= 0) {
			$(".Monitor .watersvg").css(
				"clip-path",
				"polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%)"
			);
		} else if (waterlevel <= 30) {
			// console.log(waterlevel+"polygon(50% 50%,0% 50%,0% "+(50-((waterlevel/30)*50))+"%,0% 0%,0% 0%)")
			if (prevWaterlevel > 60) {
				console.log("level 2");
				$(".Monitor .watersvg").css(
					"clip-path",
					"polygon(50% 50%,0% 50%,0% 0%,100% 0%,100% 0%)"
				);
				setTimeout(() => {
					console.log("level 1");
					$(".Monitor .watersvg").css(
						"clip-path",
						"polygon(50% 50%,0% 50%,0% 0%,0% 0%,0% 0%)"
					);
				}, 2000);
				setTimeout(() => {
					console.log("level 0");
					$(".Monitor .watersvg").css(
						"clip-path",
						"polygon(50% 50%,0% 50%,0% " +
							(50 - (waterlevel / 30) * 50) +
							"%,0% 0%,0% 0%)"
					);
				}, 4000);
			} else if (prevWaterlevel > 30) {
				console.log("level 1");
				$(".Monitor .watersvg").css(
					"clip-path",
					"polygon(50% 50%,0% 50%,0% 0%,0% 0%,0% 0%)"
				);
				setTimeout(() => {
					console.log("level 0");
					$(".Monitor .watersvg").css(
						"clip-path",
						"polygon(50% 50%,0% 50%,0% " +
							(50 - (waterlevel / 30) * 50) +
							"%,0% 0%,0% 0%)"
					);
				}, 2000);
			} else {
				console.log("level 0");
				$(".Monitor .watersvg").css(
					"clip-path",
					"polygon(50% 50%,0% 50%,0% " +
						(50 - (waterlevel / 30) * 50) +
						"%,0% 0%,0% 0%)"
				);
			}
			// setWaterlevel(56);
			// $('.Monitor .watersvg').css("clip-path","polygon(50% 50%,0% 50%,0% "+(50-((waterlevel/30)*50))+"%,0% 0%,0% 0%)");
		} else if (waterlevel <= 60) {
			var perc;
			if (waterlevel <= 50) perc = ((waterlevel - 20) / 60) * 100;
			else perc = (waterlevel / 60) * 100;
			if (prevWaterlevel < 30) {
				console.log("level 1");
				$(".Monitor .watersvg").css(
					"clip-path",
					"polygon(50% 50%,0% 50%,0% 0%,0% 0%,0% 0%)"
				);
				setTimeout(() => {
					console.log("level 2");
					$(".Monitor .watersvg").css(
						"clip-path",
						"polygon(50% 50%,0% 50%,0% 0%," +
							perc +
							"% 0%," +
							perc +
							"% 0%)"
					);
				}, 2000);
			} else if (prevWaterlevel > 60) {
				console.log("level 3");
				$(".Monitor .watersvg").css(
					"clip-path",
					"polygon(50% 50%,0% 50%,0% 0%,100% 0%,100% 0%)"
				);
				setTimeout(() => {
					console.log("level 2");
					$(".Monitor .watersvg").css(
						"clip-path",
						"polygon(50% 50%,0% 50%,0% 0%," +
							perc +
							"% 0%," +
							perc +
							"% 0%)"
					);
				}, 2000);
			} else {
				console.log("level 2");
				$(".Monitor .watersvg").css(
					"clip-path",
					"polygon(50% 50%,0% 50%,0% 0%," +
						perc +
						"% 0%," +
						perc +
						"% 0%)"
				);
			}
			setTimeout(() => {
				console.log($(".Monitor .watersvg").css("clip-path"));
			}, 5000);
		} else if (waterlevel <= 100) {
			if (prevWaterlevel < 30) {
				console.log("level 1");
				$(".Monitor .watersvg").css(
					"clip-path",
					"polygon(50% 50%,0% 50%,0% 0%,0% 0%,0% 0%)"
				);
				setTimeout(() => {
					console.log("level 2");
					$(".Monitor .watersvg").css(
						"clip-path",
						"polygon(50% 50%,0% 50%,0% 0%,100% 0%,100% 0%)"
					);
				}, 2000);
				setTimeout(() => {
					console.log("level 3");
					$(".Monitor .watersvg").css(
						"clip-path",
						"polygon(50% 50%,0% 50%,0% 0%,100% 0%,100% " +
							(50 - (100 - waterlevel)) +
							"%)"
					);
				}, 4000);
			} else if (prevWaterlevel < 60) {
				console.log("level 2");
				$(".Monitor .watersvg").css(
					"clip-path",
					"polygon(50% 50%,0% 50%,0% 0%,100% 0%,100% 0%)"
				);
				setTimeout(() => {
					console.log("level 3");
					$(".Monitor .watersvg").css(
						"clip-path",
						"polygon(50% 50%,0% 50%,0% 0%,100% 0%,100% " +
							(50 - (100 - waterlevel)) +
							"%)"
					);
				}, 2000);
			} else {
				console.log("level 3");
				$(".Monitor .watersvg").css(
					"clip-path",
					"polygon(50% 50%,0% 50%,0% 0%,100% 0%,100% " +
						(50 - (100 - waterlevel)) +
						"%)"
				);
			}
		}
	}, [waterlevel]);
	console.log(((45 - 30) / 60) * 100);
	useEffect(() => {
		$(".Monitor .tempLine span").css("height", temp + 10 + "%");
	}, [temp]);
	if(!fun.state.user.auth && !fun.state.auth)
		return authCheck(fun);
	else
	{
		return (
		<div className="Monitor">
			<h1 className="heading">Dashboard</h1>
			<div className="pump">
				<span className="working">
					{pump != "" ? "Water pump is " + pump : ""}
				</span>
				<span className="help-icon" onClick={() => setModal(true)}>
					<BiHelpCircle />
				</span>
			</div>
			<div className="gaugeflex">
				<div className="gaugecover">
					<div className="watersvg"></div>
					<span className="gaugevalue">
						<span>{waterlevel}%</span>
					</span>
				</div>{" "}
			</div>
			{/* <span>Water level - {waterlevel}</span> */}
			{/* <span>temprature - {temp}</span> */}
			<div className="tempcover">
				<div className="celsius">
					<span>{temp}&deg;C</span>
				</div>
				<div className="lineCover">
					<div className="tempLine">
						<span></span>
					</div>
				</div>
				<div className="tempNobe"></div>
			</div>
			<div className="buttons">
				<button
					type="button"
					className="auto"
					title="AUTO UPDATE updates every 10 seconds"
					onClick={() => setAuto(!auto)}
				>
					Auto Update
				</button>
				<button
					type="button"
					className="update"
					onClick={() => getData()}
				>
					Update
				</button>
				{/* <button */}
				{/* 	type="button" */}
				{/* 	className="AutoMotor" */}
				{/* 	onClick={() => autoMotor()} */}
				{/* > */}
				{/* 	Motor */}
				{/* </button> */}
				<div className="note">
					<span style={{ color: "red" }}>*</span>Turn on motor in Your
					BLYNK app to automatically supply water when necessary.
				</div>
			</div>
			<div className="help-cover">
				<span className="help-close" onClick={()=>setModal(false)}><GrFormClose className="close-icon"/></span>
				<div className="help-modal">
					<div className="content">
						<div className="help help1">
							<span className="help-heading">Auto Update</span>
							<p className="help-content">
								Automatically updates the water level and
								temperature measurement for every 10 seconds.
							</p>
						</div>
						<div className="help help2">
							<span className="help-heading">Update</span>
							<p className="help-content">
								To update the state of the water level and
								temperature manually.
							</p>
						</div>
						<div className="help help3">
							<span className="help-heading">Water pump</span>
							<p className="help-content">
								When the motor button in the BLYNK app is
								active, the water pump will automatically be
								turned on when water level drops below threshold
								value.
								<br />
								If the motor button in the BLYNK app is not
								active, the water pump will not automatically be
								turned on even when water level drops below
								threshold value.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	}
};
const authCheck=(fun)=>
{
	var saved = false;
	const authSubmit=(e)=>
	{
		e.preventDefault();
		// console.log(e)
		var auth=e.target.auth.value;
		console.log(e.target.auth.value);
		fetch("http://blynk-cloud.com/" + auth + "/project")
		.then((res) => res.json())
		.then((project) => {
			console.log(project);
			if(saved)
			{
				fetch(fun.state.api+"/authsave",{
					method: "POST",
					headers: { "Content-Type": "application/json" },
				      body: JSON.stringify({
				        id: fun.state.user._id,
				        auth:auth,
				      }),
				  })
				.then((r)=>r.json())
				.then((response)=>
				{
					console.log(response)
					if(response.success)
					{
						fun.setAuth(auth);
						fun.RouteChange("monitor");

					}
				})			
			}
			else
			{
				fun.setAuth(auth);
				fun.RouteChange("monitor");
			}	
					
		})
		.catch((err) =>
		{
			console.log(err);
			alert("Invalid Authentication token");
			document.getElementById("auth-input").value="";
		})
	}
	const checkSave=(e)=>
	{
		saved=e.target.checked;
	}
	return(
		<div className="Auth">
			<div className="auth-container">
				<h2>Authentication token</h2>
				<form className="form-auth" onSubmit={(e)=>authSubmit(e)}>
					<input type="text" className="auth-input" id="auth-input" name="auth"/>
					<span className="check-span"><input type="checkbox" className="auth-save" name="save" onChange={(e)=>checkSave(e)}/><p>Save token</p></span>
				</form>
			</div>
		</div>
		)
}
export default Monitor;
