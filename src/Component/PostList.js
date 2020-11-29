import React,{Component} from 'react';
import Post from './Post.js'

const Data=require('../data/data.json');
class App extends Component
{
  render()
  {
    return(
     Data.map(d=>
     {
     	var li=d.caption.split(' ')
     	console.log(li)
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
		console.log(caption)
     	return	<Post path={d.path} key={d.postno} postno={d.postno} uid={d.uid} caption={caption} like={d.like} comment={d.comment}/>
     })
    )
  }
}

export default App;
