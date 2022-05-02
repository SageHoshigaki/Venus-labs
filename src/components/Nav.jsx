import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="navbar-menu">
      <div class="navbar-start">
        <img
          src="./img/Venus.png"
          alt="Venus"
          width="112"
          height="28"
          href="/"
        />
      </div>

      <div class="navbar-end">
        <Link class="itembar" to="/">
          Home
        </Link>
        <Link class="itembar" to="/services">
          Services
        </Link>
        <Link class="itembar" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
