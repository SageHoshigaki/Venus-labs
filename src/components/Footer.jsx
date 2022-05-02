import React from "react";
import Office from "../components/Office";
function Footer() {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="column">
          <h1>
            We are an agency that focuses on problem solving and creativity
          </h1>
        </div>
        <div className="column">
          <Office />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
