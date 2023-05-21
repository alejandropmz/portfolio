import { React, useState } from "react";
import { Link } from "react-scroll";
import alejandroCV from "../styles/cv-alejandropacheco.pdf";

export const Navbar = () => {
  const [visible, setVisible] = useState();

  const showVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <nav id="all_nav" className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="nav-container">
          <Link to={"/"} className="navbar-brand">
            Alejandro Pacheco
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about-me"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={200}
                  className="nav-link"
                >
                  Sobre mí
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="techs"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  className="nav-link"
                >
                  Tecnologías
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={300}
                  className="nav-link"
                >
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="blogs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                  className="nav-link"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={300}
                  className="nav-link"
                >
                  Contacto
                </Link>
              </li>
              <li id="nav-resumen-li" className="nav-item">
                <a
                  download
                  href={alejandroCV}
                  rel="noreferrer"
                  id="nav-resumen"
                  className="nav-link"
                >
                  CV <i className="bx bxs-download"></i>
                </a>
              </li>
            </ul>
            <form id="nav-form" className="d-flex" role="search">
              <input
                className={visible ? "form-control me-2" : "d-none"}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <i onClick={showVisible} className="bx bx-search"></i>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
