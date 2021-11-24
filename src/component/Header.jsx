import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png"
import Search from '@material-ui/icons/Search'
import "../style/header.css";
function Header() {
  return (
    <div className="hero-header ">
      <div style={{ color: "white" }} className="d-flex logo v">
        <img src={logo} alt="" /> <h5 className='mx-2'>YouTube <sup style={{fontWeight:'200'}}>IN</sup></h5>
      </div>
      <div className='inp'><input type="text" className='k' placeholder="Search"/>
      <button className='search-btn'><Search/></button></div>
      <img className='img-user' src={user} alt="pic" />
    </div>
  );
}

export default Header;
