import React, { useState } from "react";
import Logo from "../assets/img/logo.jpg"
const loggedIn =()=>{
  // check if user is logged in
  return false;
}

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src={Logo}
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (

    <div className="header">
    <Title />

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      <li>
        {
          isLoggedIn ?
          (<button className="logout-btn" onClick={()=>setIsLoggedIn(false)}>Logout</button>):
          (<button className="login-btn" onClick={()=>setIsLoggedIn(true)}>Login</button>)
          
        }
        </li>
      </ul>
    </div>
  </div>
);
}
export default Header;
