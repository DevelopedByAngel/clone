import React,{Component} from 'react';
class UserInList extends Component
{
 
	constructor(props)
	{
		super(props);
		this.state = {
			status:''
		}
	}
	componentDidMount()
	{
		console.log(this.props)
		if(this.props.user.friends.length>0 && this.props.user.friends.includes(this.props.userID))
			this.setState({status:"Friend"})
		else if(this.props.user.pending>0 && this.props.user.pending.includes(this.props.userID))
			this.setState({status:"Accept Request"})
		else if(this.props.user.request.length>0 && this.props.user.request.includes(this.props.userID))
			this.setState({status:"Request Pending"})
		else
			this.setState({status:"Request"})
	}
  render()
  {
    return(
    	<div><span>{this.props.user.id}   </span>
    	<span className="ok {this.state.status}">{this.state.status}</span>
    	</div>)
  }
}

export default UserInList;
