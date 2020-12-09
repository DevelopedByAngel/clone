import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Menu.css'
const ProfileHeader=(props)=>
{
	const {user,fun}=props
	var add=[]
	if(fun.state.route==='profile')
	{
		add.push(<span className="pending" onClick={()=>pending(fun,user.pending)}>pending {user.pending.length}</span>)
		add.push(<span className="acept" onClick={()=>accept(fun,user.request)}>accept {user.request.length}</span>)
	}
	return (
	      <div className="ProfileHeader">
	      <img src={"http://localhost:3000/"+user.path}/>
	      <span>{user.id}</span>
	      <span className="friends" onClick={()=>friends(fun,user.friends)}>friends {user.friends.length}</span>
		  {add}  </div>
	    );

}
const friends=(fun,user)=>
{
	console.log('frieds')
	console.log(user)
	fun.updateUsers(user)
	fun.RouteChange('friends')
}
const pending=(fun,user)=>
{
	console.log('pending')
	fun.updateUsers(user)
	fun.RouteChange('friends')
}
const accept=(fun,user)=>
{
	console.log('accept')
	fun.updateUsers(user)
	fun.RouteChange('friends')
}
export default ProfileHeader;

