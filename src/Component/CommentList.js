import React,{Component} from 'react';
import Comment from './Comment.js'

class CommentList extends Component
{
  render()
  {

    return(
     this.props.comments.reverse().map((d,i)=>
     {
     	return	<Comment fun={this.props.fun} key={d._id} user={d.user} id={d._id} uid={this.props.fun.state.user.id} comment={d.comment} like={d.likes} likes={d.like}  reply={d.replies} index={this.props.fun.state.post._id+"_"+i}/>
     })
    )
  }
}

export default CommentList;
