import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Post.css'
class Comment extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			reply:'',
			isReply:false
		}
	}
	like=()=>
	{
		if(this.props.likes && !this.props.likes.includes(this.props.uid))
		{
			this.props.likes.push(this.props.uid)
			this.props.fun.likeComment(this.props.id)
			$(".like"+this.props.id+"_"+this.props.uid+' + .number').text(parseInt($(".like"+this.props.id+"_"+this.props.uid+' + .number').text())+1)
			$(".like"+this.props.id+"_"+this.props.uid).css('color','green')
		}
	}
	handleReply=(e)=>
	{
		this.setState({reply:e.target.value})
	}
	reply()
	{
		this.setState({isReply:true})
	}
	onSubmit(e)
	{
		e.preventDefault();
		this.props.fun.reply(this.props.id,this.state.reply)
	}
	componentDidMount()
	{
		if(this.props.likes && this.props.likes.includes(this.props.uid))
		{
			$(".like"+this.props.id+"_"+this.props.uid).css('color','green')
		}
	}
  render()
  {
  	var reply=[]
  	if(this.props.reply && !this.state.isReply)
 	{
     	this.props.reply.map((r) =>
     	{
     		reply.push(<div className="reply">{r.reply}</div>)
     		return r
     	})
     	reply.push(<form className="form" id="form" onSubmit={e=>this.onSubmit(e)}><input type="text" className="input-reply" onChange={e=>this.handleReply(e)} placeholder="Reply here"/><input type="submit"/></form>)
    }
    return(
     <div className="Comment" id={this.props.postno}>
	     <div className="Comment" >
	   <span className='user-name'>{this.props.user}</span>  
		     <div className="details">
			     <p className="comment">{this.props.comment}</p>
			     <p className="details-inner">
				     <span className={"like"+this.props.id+"_"+this.props.uid} onClick={()=>this.like()} >Likes </span><span className="number">{this.props.like}   </span>
				     <span className={"reply"+this.props.id}>Replies  </span><span className="number">{this.props.reply.length}   </span>
			     </p>
		     </div>
	     </div>
	     <div className="replies">
	    {reply}
	    
	     </div>
     </div>
    )
  }
}

export default Comment;


