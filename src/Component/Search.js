import React from 'react';
import $ from 'jquery';
import '../stylesheet/Search.css'
import { ImSearch } from "react-icons/im";

const Search=(props)=>
{
	const {search,profileImg}=props;
	return (
	      <div className="Search">
	      <div className="profile">
	      <img className="dp image" src={profileImg}/>
	      </div>
	      <div className="search">
	      <input className="search-field" required /><ImSearch className="search-icon"/>
	      </div>
	      </div>
	    );
}

export default Search;