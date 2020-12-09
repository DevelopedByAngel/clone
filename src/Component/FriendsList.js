import React,{Component} from 'react';
import Friends from './Friends.js'
class FriendsList extends Component
{

  render()
  {
    return(
     this.props.users.map((u,i)=>
     {
     	return	<Friends key={i} id={i} user={u} />
     })
    )
  }
}

export default FriendsList;
