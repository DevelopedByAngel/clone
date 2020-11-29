import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Post.css'
class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			file:{}
		}
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
		console.log($('.caption').text())
		$('.caption'+this.props.uid+'_'+this.props.postno).html(this.props.caption)

	}
  render()
  {
    return(
     <div className="Post" id={this.props.uid}>
	     <div className="post" >
		     <img className="post-img" alt="" src={"http://localhost:3000/"+this.props.path} />
		     <div className="details">
			     <p className={"caption"+this.props.uid+"_"+this.props.postno}>{this.props.caption}</p>
			     <p className="details-inner">
				     <span className="like" >Likes </span><span className="number">{this.props.like}   </span>
				     <span className="comment">Comments  </span><span className="number">{this.props.comment}</span>
			     </p>
		     </div>
	     </div>
     </div>
    )
  }
}

export default App;


