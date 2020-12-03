import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Post.css'
class UploadDP extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			file:{},
			caption:''
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
		fetch('http://localhost:3000/uploadDP',{
	      method:'POST',
	      body:formData,
	      headers:{id:this.props.fun.state.user._id,userID:this.props.fun.state.user.id}
	    })
	    .then(res=>res.json())
	    .then(r=>
	    	{
	    		console.log(r.path)
	    	})
	}
  render()
  {
  
    return(
     <div className="Add" id={this.props.uid}>
     <form className="form" id="form" onSubmit={e=>this.submitted(e)}>
     	<input type="file" className="input-file" accept="image/*" name="myFile" single="true" onChange={(e)=>this.handleFile(e)}/>
     	<input type="submit"/>
     </form>
     </div>
    )
  }
}

export default UploadDP;


