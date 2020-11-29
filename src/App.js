import React,{Component} from 'react';
import PostList from './Component/PostList.js'
import Add from './Component/Add.js'
import Menu from './Component/Menu.js'
import Search from './Component/Search.js'
import ProfileHeader from './Component/ProfileHeader.js'
import Store from './Component/Store.js'
import Settings from './Component/Settings.js'
class App extends Component
{
   constructor(props) {
    super(props);
    this.state =
    {
      route:'feed',
      user:{
        name:'',
        profileImg:'https://developedbyangel.github.io/SAS/logo.PNG'
      },
      postList:[]
    }
  }
  Get=(id)=>
  {
    fetch('http://localhost:3000/getPost',{
        method:'GET',
        body:{name:'angel'}
      })
      .then(res=>res.json())
      .then(r=>
        {
          console.log(r.items)
          this.setState({postList:r.items})
        })
  }
  RouteChange=(route)=>
  {
      this.setState({route:route})
  }
  search(search)
  {
    console.log(search)
  }
  render()
  {
    return(
     <div className="App">
     <Search search={this.search} profileImg={this.state.user.profileImg}/>
     <Menu route={this.RouteChange}/>
     {
      (this.state.route === 'feed')
     ?
     <div className="PostList">
     <PostList postList={this.state.postList}/>
     </div>
     :(this.state.route === 'profile')
     ?<div>
     <ProfileHeader/>
     <PostList/>
     </div>
     :(this.state.route === 'settings')
     ?<Settings/>
     :<Store/>
   }
   <Add/>
     </div>
    )
  }
}

export default App;
