import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Post.css'
class Add extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			file:{}
		}
	}
	handleFile(file)
	{
  		this.setState({file:file.target})
	}
	submitted(e)
	{
		e.preventDefault();
		const formData = new FormData()
  		formData.append('imgUploader',this.state.file.files[0])
		fetch('http://localhost:3000/upload',{
	      method:'POST',
	      body:formData,
	      headers:{user:"5fc233a4e7dad904404b6af5",id:12,postno:123,caption:"hello #hi #hello #ok"}
	    })
	    .then(res=>res.json())
	    .then(r=>
	    	{
	    		console.log(r.path.slice(6,r.length))
	    		$('img').attr('src',"http://localhost:3000/"+r.path.slice(6,r.length))
	    	})
	}
  render()
  {
  
    return(
     <div className="Add" id={this.props.uid}>
     <form className="form" id="form" onSubmit={e=>this.submitted(e)}>
     	<input type="file" className="input-file" accept="image/*" name="myFile" single onChange={(e)=>this.handleFile(e)}/>
     	<input type="submit"/>
     </form>
     </div>
    )
  }
}

export default Add;


