import React from "react";
import { Link } from "react-router-dom";
import { ProjectContainer } from "./ProjectContainer";

/* videos */
import clinic from "../styles/videos/clinic-project.mp4";
import sozial from "../styles/videos/sozial-video.mp4";

/* tecnologías */
const HTML =
  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg";
const CSS =
  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg";
const REACT =
  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg";
const BOOTSTRAP =
  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original-wordmark.svg";
const PYTHON =
  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original-wordmark.svg";
const SQLALCHEMY =
  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sqlalchemy/sqlalchemy-original-wordmark.svg";
const JAVASCRIPT =
  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg";
const FLASK =
  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/flask/flask-original-wordmark.svg";
const MYSQL =
  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original-wordmark.svg";

export const Projects = () => {
  const projects = [
    {
      video: clinic,
      techs: [HTML, CSS, BOOTSTRAP, JAVASCRIPT, PYTHON, FLASK, MYSQL],
      title: "Aplicación de control de pacientes",
      description:
        "Aplicación la cual como fin tiene manejar pacientes y lo que conlleva con ellos. Maneja base de datos mySQL para las asignación, control y eliminación de citas. Citas las cuales están relacionadas a un paciente y factura en específico para llevar el orden e integridad de datos para la clínica que utilice la herramienta. Cuenta de igual manera con un sistema de registro y validación para los usuarios que manejen información confidencial de alguna clínica. Toda la información registrada queda vinculada a una fecha de creación o eliminación para que quien la esté utilizando tenga acceso a su historial de uso.",
      link: "https://github.com/alejandropmz/clinic-project",
    },
    {
      video: sozial,
      techs: [HTML, CSS, REACT, JAVASCRIPT, BOOTSTRAP, PYTHON, SQLALCHEMY],
      title: `Red social "Sozial"`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nobis perspiciatis et neque officiis, similique molestiae maxime abLorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nobis perspiciatis et neque officiis, similique molestiae maxime abLorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nobis perspiciatis et neque officiis, similique molestiae maxime ab",
      link: "https://github.com/Alvarojavier22/Proyecto-Sozial",
    },
  ];

  return (
    <div id="projects-general-container" className="general-padding">
      <h1>Proyectos</h1>
      {projects.map((project, index) => (
        <ProjectContainer
          video={project.video}
          tech1={project.techs[0]}
          tech2={project.techs[1]}
          tech3={project.techs[2]}
          tech4={project.techs[3]}
          tech5={project.techs[4]}
          tech6={project.techs[5]}
          tech7={project.techs[6]}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
      <div className="d-flex justify-content-center">
        <Link className="normal-yellow-button">Ver más proyectos</Link>
      </div>
    </div>
  );
};
