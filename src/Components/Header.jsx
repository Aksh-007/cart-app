import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/cart"}>
          <FiShoppingBag size={32} />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
