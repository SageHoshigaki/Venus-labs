import React from "react";

function Contactmain() {
  return (
    <section class="">
      <h1 className="contact-mess">We Would Be Delighted To Hear From You.</h1>

      <div className="columns contact has-text-centered">
        <div className="column">
          <h1>Email Us</h1>
          <a href="mailto:venussoftwareco@gmail.com">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>

        <div className="column">
          <h1>Social</h1>
          <a href="">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contactmain;
