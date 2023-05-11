import React from "react";

export const Contact = () => {
  return (
    <div id="contact-container">
      <div className="general-padding">
        <div id="footer-header" className="d-flex justify-content-center">
          <h3>Envíame un mensaje</h3>
        </div>
        <div id="contact-form" className="row">
          <div className="col-sm-12 col-md-6">
            <h5>Trabajemos en equipo!</h5>
            <p>Bogotá, Colombia</p>
            <p>alejandropacheco2497@gmail.com</p>
            <div id="social-icons">
              <a href="">
                <i className="bx bxl-github"></i>
              </a>
              <a href="">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="">
                <i className="bx bx-envelope"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <form id="footer-form">
              <input placeholder="Nombres" type="text" />
              <br />
              <input placeholder="Correo electrónico" type="text" />
              <br />
              <input placeholder="Mensaje" type="text" />
              <br />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
