import React, { useState, useContext } from "react";
import Logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import MobileHamb from "./MobileHamb";
import UserContext from "../utils/UserContext";

// SPA - Single Page Application
// Routing is of two types: 1. Client Side Routing 2. Server Side Routing
// Client Side Routing

const Title = () => (
  <a href="/" className="flex justify-center ">
    <img className="w-20 h-12 md:h-12" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div className="w-full md:flex md:justify-between ">
      <Title />
      <MobileHamb />
      <div className="hidden bg-green-400 md:flex md:w-full md:justify-center">
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
      <span className="m-3 font-semibold">{user.name}</span>
      <span className="m-3 font-semibold">{user.email}</span>
      <h1 className="m-3 hover:text-white hidden md:flex">
        {isLoggedIn ? (
          <>
            <button
              className="logout-btn text-red-600 font-semibold"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="login-btn text-green-600 font-semibold"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </h1>
    </div>
  );
};
export default Header;
