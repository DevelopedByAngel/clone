import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Menu.css'
const ProfileHeader=(props)=>
{
	const {fun}=props

	return (
	      <div className="ProfileHeader">
	      <img src={"http://localhost:3000/"+fun.state.user.path}/>
	      <span>{fun.state.user.id}</span>
	      <span className="friends">friends {fun.state.user.friends.length}</span>
		    </div>
	    );

}

export default ProfileHeader;

