import React, { Component } from "react";
import Loader from "./Component/Loader.js";
import Signup from "./Component/Signup.js";
import Login from "./Component/Login.js";
import UploadDP from "./Component/UploadDP.js";
import PostList from "./Component/PostList.js";
import Add from "./Component/Add.js";
import Addcomment from "./Component/Addcomment.js";
import CommentList from "./Component/CommentList.js";
import Menu from "./Component/Menu.js";
import Search from "./Component/Search.js";
import ProfileHeader from "./Component/ProfileHeader.js";
import Store from "./Component/Store.js";
import Settings from "./Component/Settings.js";
import UsersList from "./Component/UsersList.js";
import FriendsList from "./Component/FriendsList.js";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: "home",
      loading: false,
      user: {
        name: "",
        profileImg: "https://developedbyangel.github.io/SAS/logo.PNG",
      },
      postList: [],
      users: [],
      viewProfile: {
        name: "",
        profileImg: "https://developedbyangel.github.io/SAS/logo.PNG",
      },
      post: {},
    };
    this.prevState = {};
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  login = (id, password) => {
    console.log("log");
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        if (r.error) {
          alert(r.error);
        } else {
          console.log(r);
          this.setState({ user: r.user });
          this.setState({ postList: r.post });
          this.RouteChange("profile");
        }
      });
  };
  signup = (id, email, password) => {
    console.log("log");
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        this.setState({ user: r.user });
        this.setState({ postList: r.post });
        this.RouteChange("uploadDP");
      })
      .catch((err) => alert(err.message));
  };
  hashtags = (hashtag) => {
    this.loading(true)
    fetch("http://localhost:3000/hashtags/" + hashtag, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((r) => {
        this.setState({ postList: r });
        this.RouteChange("feed");
      })
      .catch((err) => alert(err.message));
  };
  request = (requestName) => {
    console.log(requestName);
    fetch("http://localhost:3000/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID: this.state.user._id,
        userName: this.state.user.id,
        requestName: requestName,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        var state = this.state.user;
        state.pending.push(requestName);
        this.setState({ user: state });
        $(".status" + requestName).text("Request Pending");
        console.log(r);
        return r;
      })
      .catch((err) => alert(err.message));
  };
  acceptRequest = (requestName) => {
    console.log(requestName);
    fetch("http://localhost:3000/acceptRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID: this.state.user._id,
        userName: this.state.user.id,
        requestName: requestName,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        var state = this.state.user;
        state.pending.splice(state.request.indexOf(requestName), 1);
        state.friends.push(requestName);
        this.setState({ user: state });
        console.log(r);
        $(".status" + requestName).text("Unfriend");
        return r;
      })
      .catch((err) => alert(err.message));
  };
  cancelRequest = (requestName) => {
    console.log("ok", requestName);
    fetch("http://localhost:3000/cancelRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID: this.state.user._id,
        userName: this.state.user.id,
        requestName: requestName,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        var state = this.state.user;
        state.pending.splice(state.pending.indexOf(requestName), 1);
        this.setState({ user: state });
        console.log(r);
        $(".status" + requestName).text("Request");
        return r;
      })
      .catch((err) => alert(err.message));
  };
  Unfriend = (friendName) => {
    console.log(friendName);
    fetch("http://localhost:3000/Unfriend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID: this.state.user._id,
        userName: this.state.user.id,
        friendName: friendName,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        var state = this.state.user;
        state.friends.splice(state.pending.indexOf(friendName), 1);
        this.setState({ user: state });
        console.log(r);
        $(".status" + friendName).text("Request");
        return r;
      })
      .catch((err) => alert(err.message));
  };
  feeds = () => {
     this.loading(true)
    console.log("feed", this.state.user);
    fetch("http://localhost:3000/feeds/" + this.state.user._id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((r) => {
        console.log(r);
        this.setState({ postList: r });
        this.RouteChange("feed")
      })
      .catch((err) => alert(err.message));
  };
  like = (postID) => {
    fetch("http://localhost:3000/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postID: postID,
        userID: this.state.user.id,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        if (r) console.log("liked");
      })
      .catch((err) => alert(err.message));
  };
  share = (postID) => {
    fetch("http://localhost:3000/share", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postID: postID,
        userID: this.state.user.id,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        if (r) console.log("share");
      })
      .catch((err) => alert(err.message));
  };
  comment = (cmt) => {
    fetch("http://localhost:3000/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postID: this.state.post._id,
        userID: this.state.user.id,
        cmt: cmt,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        if (r) {
          console.log(r);
          var postList = this.state.postList;
          postList.map((post) => {
            var p = post;
            if (post._id === this.state.post._id) {
              p.comments.push(r);
            }
            return p;
          });
          this.setState({ postList: postList });
          $(".input-comment").val("");
          $('.Addcomment .svg').css({"animation-name":"o"})
        }
      })
      .catch((err) => alert(err.message));
  };
  reply = (cmtID, reply) => {
    fetch("http://localhost:3000/reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postID: this.state.post._id,
        userID: this.state.user.id,
        cmtID: cmtID,
        reply: reply,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        if (r) {
          console.log(r);
          var post = this.state.post;
          post.comments.map((c) => {
            var p = c;
            if (c._id === cmtID) {
              p.replies.push(r);
            }
            return p;
          });
          this.setState({ post: post });
          $(".input-reply").val("");
        }
      })
      .catch((err) => alert(err.message));
  };
  likeComment = (cmtID) => {
    fetch("http://localhost:3000/likeComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postID: this.state.post._id,
        cmtID: cmtID,
        userID: this.state.user.id,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        if (r) console.log(r);
      })
      .catch((err) => alert(err.message));
  };
  RouteChange = (route) => {
     this.loading(false)
    this.prevState = this.state;
    console.log("routing to " + route);
    this.setState({ route: route });
  };
  search = (e, q) => {
     this.loading(true)
    e.preventDefault();
    if (q[0] === "#") {
      this.hashtags(q.slice(1));
    } else {
      console.log(q);
      fetch("http://localhost:3000/search/" + q, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((r) => {
          if (r) {
            console.log(r);
            this.setState({ users: r });
            this.RouteChange("usersList");
            $(".search-field").val("");
          }
        })
        .catch((err) => alert(err.message));
    }
  };
  viewProfile(user) {
     this.loading(true)
    console.log("going to view profile");
    fetch("http://localhost:3000/getUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: user,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        if (r) {
          console.log(r.user);
          this.setState({ viewProfile: r.user });
          this.setState({ postList: r.post });
          this.RouteChange("viewProfile");
        }
      })
      .catch((err) => alert(err.message));
  }
  getUser = () => {
     this.loading(true)
    console.log("going to view your profile");
    fetch("http://localhost:3000/getUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        if (r) {
          console.log(r.user);
          this.setState({ postList: r.post });
          this.RouteChange("profile");
        }
      })
      .catch((err) => alert(err.message));
  };
  updateuser(user) {
    this.setState({ user: user });
  }
  updateUsers(users) {
    console.log(users);
    this.setState({ users: users });
  }
  updatePost(post) {
    console.log(post);
    this.setState({ post: post });
    console.log(this.state);
  }
  back() {
    console.log(this.prevState);
    this.setState(this.prevState);
  }
  loading(check)
  {
    if(check)
    {
      $('.Loader').css('display','flex');
      this.setState({loading:true})
    }
    else
    {
      $('.Loader').css('display','none');
      this.setState({loading:false})
    }
  }
  render() {
    return (
      <div className="App">
        <div
          className="back"
          onClick={() => this.back()}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            position: "fixed",
          }}
        ></div>
        <Loader loading={this.state.loading}/>
        {this.state.route === "home" ? (
          <Login fun={this} />
        ) : this.state.route === "uploadDP" ? (
          <UploadDP fun={this} />
        ) : (
          <div>
            <Search search={this.search} profileImg={this.state.user.path} />
            <Menu route={this.RouteChange} fun={this} />
            {this.state.route === "viewProfile" ? (
              <div>
                <ProfileHeader user={this.state.viewProfile} fun={this} />
                <div className="PostList">
                  <PostList
                    postList={this.state.postList}
                    user={this.state.viewProfile}
                    fun={this}
                  />
                </div>
              </div>
            ) : this.state.route === "comment" ? (
              <div className="comment">
                <Addcomment fun={this} />
                <CommentList fun={this} comments={this.state.post.comments} />
              </div>
            ) : this.state.route === "friends" ? (
              <FriendsList users={this.state.users} />
            ) : this.state.route === "usersList" ? (
              <UsersList
                userID={this.state.user.id}
                users={this.state.users}
                fun={this}
              />
            ) : this.state.route === "feed" ? (
              <div className="PostList">
                <PostList
                  postList={this.state.postList}
                  user={this.state.user}
                  fun={this}
                />
              </div>
            ) : this.state.route === "profile" ? (
              <div>
                <ProfileHeader user={this.state.user} fun={this} />
                <div className="PostList profilePostList">
                  <PostList
                    postList={this.state.postList}
                    user={this.state.user}
                    fun={this}
                  />
                </div>
              </div>
            ) : this.state.route === "settings" ? (
              <Settings />
            ) : (
              <Store />
            )}
            <Add fun={this} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
