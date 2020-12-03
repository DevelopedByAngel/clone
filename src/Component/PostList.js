import React,{Component} from 'react';
import Post from './Post.js'

class App extends Component
{
  render()
  {
    return(
     this.props.postList.reverse().map(d=>
     {
     	var li=d.caption.split(' ')
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
		var caption = li.join(' ')
		console.log(d.likes)
     	return	<Post fun={this.props.fun} path={d.path} key={d._id} user={d.user} postno={d._id} uid={this.props.user.id} caption={caption} like={d.likes.length} likes={d.likes} comment={d.comments.length} comments={d.comments} share={d.noOfShare}/>
     })
    )
  }
}

export default App;
