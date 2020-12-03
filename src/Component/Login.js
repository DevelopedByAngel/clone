import React,{Component} from 'react';
import $ from 'jquery';
class Login extends Component {
	constructor(props)
	{
		super(props);
		this.state=
		{
			id:'',
			password:''
		}
	}
	emailchange=(email)=>
	{
		this.setState({id:email.target.value});
	}
	passwordChange=(password)=>
	{
		this.setState({password:password.target.value})
	}
	onsubmit=(e)=>
	{
		e.preventDefault();
		this.props.fun.login(this.state.id, this.state.password)
			
	}

	  render()
	  {
	  	
	  return (
	      <div className="Login">
	      <div className="main">
	      <div className="form">
	      <form className="loginform" onSubmit={(e)=>this.onsubmit(e)}>
	      <h1>Welcome back!!!</h1>
	      <span>
	      <label htmlFor="email">Email</label><br/>
	      <input type="text" id='email' name="email" pattern="^[^\s]+$"   onChange={(e)=>this.emailchange(e)}></input><br/>
	      </span>
	      <span>
	      <label htmlFor="password">Password</label><br/>
	      <input type="password" id="password"  name="password" onChange={(e)=>this.passwordChange(e)}></input><br/>
	      </span>
	      <input type="submit" value="Login" id="submit"></input>
	      </form>
	      <div class="round">
	      <span></span>
	      <span></span>
	      <span></span>
	      </div>
	      </div>
	      </div>
	      </div>
	    );
  }
}

export default Login;