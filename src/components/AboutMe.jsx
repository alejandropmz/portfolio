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
        <div
          id="about-right"
          className="col-sm-12 col-md-8 d-flex flex-column justify-content-between"
        >
          <p>
            Desarrollador de Software Full Stack, viviendo actualmente en
            Bogotá, Colombia. Actualmente me dedico a tiempo completo a trabajar
            en proyectos personales y como Freelancer. Persona proactiva y de
            buena comunicación y entendimiento que busca siempre hacer un buen
            trabajo en el entorno laboral donde se encuentra. Positivo y siempre
            abierto a nuevas experiencias y aprendizajes 🖥
            <br />
            <br />
            <div className="row d-flex">
              <ul className="skills-list col-md-12 col-lg-6">
                <li>
                  <div className="d-flex">
                    <p>Comunicación:</p>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <p>Aprendizaje:</p>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bx-star"></i>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <p>Trabajo en equipo:</p>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </li>
              </ul>
              <ul className="skills-list col-md-12 col-lg-6">
                <li>
                  <div className="d-flex">
                    <p>Estrés:</p>
                    <i className="bx bxs-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <p>Disciplina:</p>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bx-star"></i>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <p>Responsabilidad:</p>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </li>
              </ul>
            </div>
          </p>
          <div className="icons">
            <a
              href="https://github.com/alejandropmz"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alejandropmz/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@alejandropacheco5420"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
