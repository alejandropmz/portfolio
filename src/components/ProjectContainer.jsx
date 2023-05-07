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
  title,
  description,
  link
}) => {
  return (
    <div id="project-container" className="row">
      <div className="col-sm-12 col-md-6">
        <div className="project d-flex justify-content-center">
          <ReactPlyer width={"80%"} playing loop muted url={video} />
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
          </ul>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="description">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <a href={link} target="_blank" className="d-flex justify-content-end">
            <button id="contact-button">
              Conoce más <i className="bx bxl-github"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
