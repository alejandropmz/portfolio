import { React, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [visible, setVisible] = useState();

  const showVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <nav id="all_nav" className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="nav-container">
          <Link to={"/home"} className="navbar-brand">
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
                <Link className="nav-link" to={""}>
                  Sobre mí
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Tecnologías
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Contacto
                </Link>
              </li>
              <li id="nav-resumen-li" className="nav-item">
                <Link id="nav-resumen" className="nav-link" to={""}>
                  CV
                </Link>
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
