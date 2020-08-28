import React from "react";
import logo from "../../Images/logo.jpg";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/Courses">All Courses</a>
        <a href="/review">Order Review</a>
        <a href="/coupon">Add Coupon</a>
      </nav>
    </div>
  );
};

export default Header;
