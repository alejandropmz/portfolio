import React from "react";

export const AboutMe = () => {
  return (
    <div id="about-me-container" className="general-padding">
      <h1>¿Quién es Alejandro?</h1>
      <div className="row about-header">
        <div id="about-left" className="col-sm-12 col-md-4">
          <img
            src="https://courageous-torrone-5e04a6.netlify.app/images/profile-picture.jpg"
            alt=""
          />
        </div>
        <div id="about-right" className="col-sm-12 col-md-8 d-flex flex-column justify-content-between">
          <p>
            Desarrollador de Software Full Stack, viviendo actualmente en
            Bogotá, Colombia. Actualmente me dedico a tiempo completo a trabajar
            en proyectos personales y como Freelancer. Persona proactiva y de
            buena comunicación y entendimiento que busca siempre hacer un buen
            trabajo en el entorno laboral donde se encuentra. Positivo y siempre
            abierto a nuevas experiencias y aprendizajes 🖥
          </p>
          <div className="icons">
            <i className="bx bxl-github"></i>
            <i className="bx bxl-linkedin"></i>
            <i className="bx bxl-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
