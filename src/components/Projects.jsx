import React from "react";
import { ProjectContainer } from "./ProjectContainer";

/* videos */
import starwars from "../styles/videos/starwars-blog-video.mp4";
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
      video: starwars,
      techs: [HTML, CSS, REACT, BOOTSTRAP],
      title: "Starwars blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nobis perspiciatis et neque officiis, similique molestiae maxime abLorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nobis perspiciatis et neque officiis, similique molestiae maxime abLorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nobis perspiciatis et neque officiis, similique molestiae maxime ab",
      link: "https://github.com/alejandropmz/starwars-blog",
    },
    {
      video: sozial,
      techs: [HTML, CSS, REACT, BOOTSTRAP, PYTHON, SQLALCHEMY],
      title: "Sozial social media",
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
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};
