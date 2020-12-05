import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Menu.css'
const ProfileHeader=(props)=>
{
	const {user}=props
	console.log(props)
	return (
	      <div className="ProfileHeader">
	      <img src={"http://localhost:3000/"+user.path}/>
	      <span>{user.id}</span>
	      <span className="friends">friends {user.friends.length}</span>
		    </div>
	    );

}

export default ProfileHeader;

