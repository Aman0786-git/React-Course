import React, { useState } from "react";
import Logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";

// SPA - Single Page Application
// Routing is of two types: 1. Client Side Routing 2. Server Side Routing
// Client Side Routing

const Title = () => (
  <a href="/" className="bg-green-400">
    <img className="h-12" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-green-400">
      <Title />
      <div className="">
        <ul className="flex m-1 content-center">
          <li className="m-2 hover:text-white ">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 hover:text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-2 hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2 hover:text-white">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="m-2 hover:text-white">
            <Link to="/instamart">Instamart</Link>
          </li>
          
        </ul>
      </div>
          <h1 className="m-3 hover:text-white">
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </h1>
    </div>
  );
};
export default Header;
