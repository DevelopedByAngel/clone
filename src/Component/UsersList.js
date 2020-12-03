import React,{Component} from 'react';
import UserInList from './UserInList.js'
class UsersList extends Component
{

  render()
  {
  	console.log(this.props.userID)
    return(
     this.props.users.map((u,i)=>
     {
     	return	<UserInList key={i} user={u} userID={this.props.userID}/>
     })
    )
  }
}

export default UsersList;
