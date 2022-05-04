import React from "react";

function Contactmain() {
  return (
    <section class="">
      <h1 className="contact-mess">
        We Would Be Delighted To <br></br>Hear From You.
      </h1>

      <div className="columns contact has-text-centered">
        <div className="column email-co">
          <h1>Email Us</h1>
          <a href="mailto:venussoftwareco@gmail.com">
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
          </a>
        </div>

        <div className="column">
          <h1>Social</h1>
          <a href="https://www.facebook.com/Venus-Labs-101182012595179/">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/venus__labs/">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contactmain;
