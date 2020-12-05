import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Post.css'
class Post extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			file:{}
		}
	}
	like=()=>
	{
		console.log('liking')
		if(!this.props.likes.includes(this.props.fun.state.user.id))
		{
			this.props.fun.like(this.props.postno)
			$('.like'+this.props.postno+' + .number').text(parseInt($('.like'+this.props.postno+' + .number').text())+1)
			$('.like'+this.props.postno).css('color','green')
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
			$('.like'+this.props.postno).css('color','green')
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
				     <span className={"like"+this.props.postno} onClick={()=>this.like()} >Likes </span><span className="number">{this.props.like}   </span>
				     <span className={"comment"+this.props.postno} onClick={()=>this.comment()}>Comments  </span><span className="number">{this.props.comment}   </span>
				     <span className={"share"+this.props.postno} onClick={()=>this.share()}>Share</span><span className="number">{this.props.share}</span>
			     </p>
		     </div>
	     </div>
     </div>
    )
  }
}

export default Post;


