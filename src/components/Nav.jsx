import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [triggerCur, setTrigger] = useState(false);
  return (
    <nav
      class="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a href="/">
          <img src="./img/Venus.png" alt="Venus" width="112" height="28" />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          href="/"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" id="nav-links">
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
    </nav>
  );
}

export default Nav;
