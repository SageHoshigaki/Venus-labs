import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="navbar-menu">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <Link class="itembar" to="/">
          Home
        </Link>
        <Link class="itembar" to="/about">
          About
        </Link>
        <Link class="itembar" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
