import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="column is-three-fifths">
          <h1 className="has-text-centered">
            We are an agency that focuses on problem solving and creativity
          </h1>
        </div>
        <div className="column ">
          <div class=" has-text-centered is-flex-wrap-wrap">
            <div className="columns">
              <div class="column">
                <h1>New York</h1>
                <h3>
                  28-07 Jackson Ave <br></br>Long Island City, NY 11101
                </h3>
              </div>
              <div class="column">
                <h1>Los Angeles</h1>
                <h3>
                  1019 E 4th Place<br></br> Los Angeles, CA 90013
                </h3>
              </div>
            </div>
            <div className="columns">
              <div class="column">
                <h1>Houston</h1>
                <h3>
                  2700 Post Oak Blvd <br></br> Houston, TX 77056
                </h3>
              </div>
              <div class="column">
                <h1>London</h1>
                <h3>131 Finsbury Pavement London EC2A 1NT</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
