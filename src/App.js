import React,{Component} from 'react';
import Signup from './Component/Signup.js'
import Login from './Component/Login.js'
import UploadDP from './Component/UploadDP.js'
import PostList from './Component/PostList.js'
import Add from './Component/Add.js'
import Menu from './Component/Menu.js'
import Search from './Component/Search.js'
import ProfileHeader from './Component/ProfileHeader.js'
import Store from './Component/Store.js'
import Settings from './Component/Settings.js'
import Profile from './fetch/profile.js';
import UsersList from './Component/UsersList.js'
class App extends Component
{
   constructor(props) {
    super(props);

    this.state =
    {
      route:'login',
      user:{
        name:'',
        profileImg:'https://developedbyangel.github.io/SAS/logo.PNG'
      },
      postList:[],
      users:[]
    }
  }
  login=(id,password)=>
  {
    console.log('log')
    fetch('http://localhost:3000/login',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        id:id,
        password:password
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      console.log(r)
      this.setState({user:r.user})
      this.setState({postList:r.post})
      this.RouteChange('profile')
    })
  }
  signup=(id,email,password)=>
  {
    console.log('log')
    fetch('http://localhost:3000/signup',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        id:id,
        email:email,
        password:password
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      this.setState({user:r.user})
      this.setState({postList:r.post})
    })
    .catch(err=>alert(err.message))
  }
  hashtags=(hashtag)=>
  {
    fetch('http://localhost:3000/hashtags',
    {
      method:'GET',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        hashtag:hashtag
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      this.setState({postList:r})
    })
    .catch(err=>alert(err.message))
  }
  request=(requestName)=>
  {
    fetch('http://localhost:3000/hashtags',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        userID:this.state.user._id,
        userName:this.state.user.id,
        requestName:requestName
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      var state=this.state.user
      state.pending.push(requestName)
      this.setState({user:state})
      console.log(r)
    })
    .catch(err=>alert(err.message))
  }
  acceptRequest=(requestName)=>
  {
    fetch('http://localhost:3000/acceptRequest',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        userID:this.state.user._id,
        userName:this.state.user.id,
        requestName:requestName
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      var state=this.state.user
      state.pending.splice(state.pending.indexOf(requestName),1)
      state.friends.push(requestName)
      this.setState({user:state})
      console.log(r)
    })
    .catch(err=>alert(err.message))
  }
  Unfriend=(friendName)=>
  {
    fetch('http://localhost:3000/Unfriend',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        userID:this.state.user._id,
        userName:this.state.user.id,
        friendName:friendName
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      var state=this.state.user
      state.friends.splice(state.pending.indexOf(friendName),1)
      this.setState({user:state})
      console.log(r)
    })
    .catch(err=>alert(err.message))
  }
  feeds=()=>
  {
    console.log("feed",this.state.user)
    fetch('http://localhost:3000/feeds/'+this.state.user._id,
    {
      method:'GET',
      headers: {'Content-Type':'application/json'}
    })
    .then(res=>res.json())
    .then(r=>
    {
      console.log(r)
      this.setState({postList:r})
    })
    .catch(err=>alert(err.message))
  }
  like=(postID)=>
  {
    fetch('http://localhost:3000/like',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        postID:postID,
        userID:this.state.user.id
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      if(r)
        console.log('liked')
    })
    .catch(err=>alert(err.message))
  }
  share=(postID)=>
  {
    fetch('http://localhost:3000/share',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        postID:postID,
        userID:this.state.user.id
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      if(r)
        console.log('share')
    })
    .catch(err=>alert(err.message))
  }
  comment=(postID,cmt)=>
  {
    fetch('http://localhost:3000/comment',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        postID:postID,
        userID:this.state.user.id,
        cmt:cmt
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      if(r)
        console.log(r)
    })
    .catch(err=>alert(err.message))
  }
  reply=(postID,cmtID,reply)=>
  {
    fetch('http://localhost:3000/reply',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        postID:postID,
        userID:this.state.user.id,
        cmtID:cmtID,
        reply:reply
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      if(r)
        console.log(r)
    })
    .catch(err=>alert(err.message))
  }
  likeComment=(postID,cmtID)=>
  {
    fetch('http://localhost:3000/likeComment',
    {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        postID:postID,
        cmtID:cmtID,
        userID:this.state.user.id
      })
    })
    .then(res=>res.json())
    .then(r=>
    {
      if(r)
        console.log(r)
    })
    .catch(err=>alert(err.message))
  }
  RouteChange=(route)=>
  {

      console.log("routing to "+route)
      this.setState({route:route})
  }
  search=(e,q)=>
  {
    e.preventDefault();
    console.log(q)
    fetch('http://localhost:3000/search/'+q,
    {
      method:'GET',
      headers: {'Content-Type':'application/json'}
      })
    .then(res=>res.json())
    .then(r=>
    {
      if(r)
      {
        console.log(r)
        this.setState({users:r})
        this.RouteChange('usersList')
      }
    })
    .catch(err=>alert(err.message))
  }
  updateuser(user)
  {
    this.setState({user:user})
  }
  updatePostList(list)
  {
    this.setState({postList:list})
  }
  render()
  {
    return(
     <div className="App">
     <Search search={this.search} profileImg={this.state.user.path}/>
     <Menu route={this.RouteChange} fun={this}/>
     {
      (this.state.route==='signup')
     ?<Signup fun={this}/>
      :(this.state.route==='login')
      ?<Login fun={this}/>
      :(this.state.route==='uploadDP')
      ?<UploadDP fun={this}/>
     :(this.state.route==='usersList')
     ?<UsersList userID={this.state.user.id} users={this.state.users}/>
     :(this.state.route === 'feed')
     ?
     <div className="PostList">
     <PostList postList={this.state.postList} user={this.state.user} fun={this}/>
     </div>
     :(this.state.route === 'profile')
     ?<div>
     <ProfileHeader fun={this}/>
     <PostList postList={this.state.postList} user={this.state.user} fun={this}/>
     </div>
     :(this.state.route === 'settings')
     ?<Settings/>
     :<Store/>
   }
   <Add fun={this}/>
     </div>
    )
  }
}

export default App;
