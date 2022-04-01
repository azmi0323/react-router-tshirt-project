import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-part">
      <div>
        <h2>TShirt Mania</h2>
      </div>
      <div >
        <Link className="header-link" to="/">Home</Link>
        <Link className="header-link" to="/orderReview">OrderReview</Link>
        <Link className="header-link" to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
