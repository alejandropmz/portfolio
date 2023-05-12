import React from "react";
import ReactPlyer from "react-player";

export const ProjectContainer = ({
  video,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  title,
  description,
  link,
  status,
}) => {
  return (
    <div id="project-container" className="row">
      <div className="col-sm-12 col-md-6">
        <div className="project d-flex justify-content-center">
          <ReactPlyer id="project-video" width={"80%"} playing loop muted url={video} />
        </div>
        <div className="techs">
          <ul className="d-flex">
            <li>
              <img src={tech1} alt="" />
            </li>
            <li>
              <img src={tech2} alt="" />
            </li>
            <li>
              <img src={tech3} alt="" />
            </li>
            <li>
              <img src={tech4} alt="" />
            </li>
            <li>
              <img src={tech5} alt="" />
            </li>
            <li>
              <img src={tech6} alt="" />
            </li>
            <li>
              <img src={tech7} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="description">
          <div>
            <h2 id="title">{title}</h2>
            <p>{description}</p>
          </div>
          {!status ? (
            <div id="project-info">
              <p>
                En progreso <i className="bx bx-loader-circle"></i>
              </p>
              <a rel="noreferrer" href={link} target="_blank">
                <button id="contact-button">
                  Conoce más <i className="bx bxl-github"></i>
                </button>
              </a>
            </div>
          ) : (
            <div className="d-flex justify-content-end align-items-center">
              <a rel="noreferrer" href={link} target="_blank">
                <button id="contact-button">
                  Conoce más <i className="bx bxl-github"></i>
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
