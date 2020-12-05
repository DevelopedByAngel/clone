import React,{Component} from 'react';
import $ from 'jquery';
class Addcomment extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			comment:''
		}
	}
	handleCaptions=(c)=>
	{
		this.setState({comment:c.target.value});
	}
	submitted(e)
	{
		e.preventDefault();
		this.props.fun.comment(this.state.comment)
	}
  render()
  {
  
    return(
     <div className="Addcomment" >
     <form className="form" id="form" onSubmit={e=>this.submitted(e)}>
     	<input type="text" className="input-comment" onChange={e=>this.handleCaptions(e)} placeholder="Comment here"/>
     	<input type="submit"/>
     </form>
     </div>
    )
  }
}

export default Addcomment;


