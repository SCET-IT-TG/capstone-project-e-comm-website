import React, { useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from '../Assets/dropdown_icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle=(e)=>{
	menuRef.current.classList.toggle('nav-menu-visible');
	e.target.classList.toggle('open');
}

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="nav-logo" />
        <p>Vintage Vista</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("painting");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/painting">
            Painting
          </Link>
          {menu === "painting" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("festive");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/festive">
            Festive
          </Link>
          {menu === "festive" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("plants");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/plants">
            Plants
          </Link>
          {menu === "plants" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mirror");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mirror">
            Mirror
          </Link>
          {menu === "mirror" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;