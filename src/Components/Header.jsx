import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>
          <FiShoppingBag size={32}/>
           <p>0</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
