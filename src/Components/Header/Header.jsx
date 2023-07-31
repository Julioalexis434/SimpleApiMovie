import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to='/' className="link">Home</Link>
          <Link to='/movies/popular'  className="link">Popular</Link>
          <Link to='/movies/top_rated'  className="link">top_rage </Link>
          <Link to='/movies/upcoming'  className="link">upcoming </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
