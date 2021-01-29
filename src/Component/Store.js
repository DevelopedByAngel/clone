import React, { Component } from "react";
import $ from "jquery";
import "../stylesheet/Menu.css";
import {BsDropletFill} from "react-icons/bs"
var a=0;
setInterval(function()
{
	a=a+1
	if(a>3)
		a=1
	if(a==1)
	$('.Store .water svg path').attr('d','M0,32L48,69.3C96,107,192,181,288,202.7C384,224,480,192,576,149.3C672,107,768,53,864,64C960,75,1056,149,1152,181.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z');
	else if(a==2)
	$('.Store .water svg path').attr('d','M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,234.7C672,235,768,213,864,197.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z')
else if(a==3)
	$('.Store .water svg path').attr('d','M0,96L48,80C96,64,192,32,288,26.7C384,21,480,43,576,80C672,117,768,171,864,181.3C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z')
else
	$('.Store .water svg path').attr('d','M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,101.3C672,96,768,64,864,85.3C960,107,1056,181,1152,186.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z')
},800 )
const Store = (props) => {
	return (
		<div className="Store">
			<div className="auth-div">
				<form className="auth-form">
					<input type="text" className="auth" />
				</form>
			</div>
			<div className="drop">
			<BsDropletFill/>
			</div>
			<div className="water">
			<div className="water-container">
			<svg style={{"transition":"all 1s linear"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,0L26.7,32C53.3,64,107,128,160,128C213.3,128,267,64,320,37.3C373.3,11,427,21,480,58.7C533.3,96,587,160,640,160C693.3,160,747,96,800,80C853.3,64,907,96,960,90.7C1013.3,85,1067,43,1120,37.3C1173.3,32,1227,64,1280,112C1333.3,160,1387,224,1413,256L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
			</div>
			</div>
		</div>
	);
};

export default Store;

