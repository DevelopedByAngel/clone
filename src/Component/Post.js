import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Post.css'
import { RiLeafLine } from "react-icons/ri";
import { RiLeafFill } from "react-icons/ri";
import {BiCommentEdit} from "react-icons/bi";
import {HiShare} from "react-icons/hi";
class Post extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			file:{},
			liked:false
		}

	}
	like=()=>
	{
		console.log('liking')
		if(!this.props.likes.includes(this.props.fun.state.user.id) && !this.state.liked)
		{
			this.props.fun.like(this.props.postno)
			$('.like'+this.props.postno+' + .number').text(parseInt($('.like'+this.props.postno+' + .number').text())+1)

		$('.like'+this.props.postno+' .like-svg').css({transform: "scale3d(2, 2, 2)",opacity: "0",position: "absolute", fill: "green",left:"0px",top:"0px"})
		$('.like'+this.props.postno+' .liked-svg').css({display: "inline"})
		setTimeout(() => {
			$('.like'+this.props.postno+' .like-svg').css({display: "none" })
		},250)
			this.setState({liked: true})
		}
	}
	comment=()=>
	{
		this.props.fun.updatePost(this.props.post)
		this.props.fun.RouteChange("comment")
	}
	share=()=>
	{
		this.props.fun.share(this.props.postno)
		$('.share'+this.props.postno+' + .number').text(parseInt($('.share'+this.props.postno+' + .number').text())+1)
	}
	re(caption)
	{
		var li=caption.split(' ')
		li=li.map((c)=>
		{
			var a=c
			if(c[0]==='#')
			{
				a='<a className="hashtag" style="color:blue;text-decoration:none" href="/hashtag/'+c.replace("#","")+'">'+c.replace("#","")+'</a>'
				return a
			}
			else
			{
				return c
			}

		})
		return(li.join(' '))
	}
	componentDidMount()
	{
		console.log('mounted')
		if(this.props.likes.includes(this.props.fun.state.user.id))
		{
			console.log('likes'+this.props.postno)
			$('.like'+this.props.postno+' .like-svg').css({display: "none" })
			$('.like'+this.props.postno+' .liked-svg').css({display: "inline"})
			this.setState({liked: true})
		}
		$('.caption'+this.props.uid+'_'+this.props.postno).html(this.props.caption)
		
	}
  render()
  {
    return(
     <div className="Post" id={this.props.postno}>
	     <div className="post" >
	   <span className='user-name'>{this.props.user}</span>  
		     <img className="post-img" alt="" src={"http://localhost:3000/"+this.props.path} />
		     <div className="details">
			     <p className={"caption"+this.props.uid+"_"+this.props.postno}>{this.props.caption}</p>
			     <p className="details-inner">
				     <span className={"like"+this.props.postno} onClick={()=>this.like()} ><RiLeafFill className="liked-svg" style={{display:"none"}}/><RiLeafLine className="like-svg" /><span className="number">{this.props.like}   </span> </span>
				     <span className={"comment"+this.props.postno} onClick={()=>this.comment()}><BiCommentEdit/> <span className="number">{this.props.comment}   </span> </span>
				     <span className={"share"+this.props.postno} onClick={()=>this.share()}><HiShare/><span className="number">{this.props.share}</span></span>
			     </p>
		     </div>
	     </div>
     </div>
    )
  }
}

export default Post;


