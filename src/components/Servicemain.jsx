import React from "react";

function ServiceMain() {
  return (
    <div>
      <section>
        <h1 className="service-head">
          We’ve developed a clear and concise<br></br> process for building
          innovative products.<br></br>Always listening and tailoring every part
          of the experience to solve our clients business needs.
        </h1>

        <section className="service-mobile">
          <div className="columns">
            <div className="column">
              <h1 className=" mobile-head has-text-centered">
                Mobile & Web Application Development
              </h1>
              <video
                className=" is-widescreen"
                width="100%"
                height="30%"
                src="./video/appdev.mp4"
                type="video/mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </section>
        <section className="service-ux">
          <div className="columns">
            <div className="column has-text-centered">
              <img
                className="has-text-centered"
                src="./img/uxui.png"
                alt="Venus"
                height="1090"
                width="1090"
              />
            </div>
          </div>
          <h1 className="ux-head has-text-centered">Ux-Ui</h1>
        </section>
      </section>
    </div>
  );
}

export default ServiceMain;
