import React from "react";

export const Technologies = () => {
  const techs = [
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg"
      alt=""
    />,
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg"
      alt=""
    />,
    <img
      id="js-icon"
      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"
      alt=""
    />,
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original-wordmark.svg"
      alt=""
    />,
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg"
      alt=""
    />,
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original-wordmark.svg"
      alt=""
    />,
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/flask/flask-original-wordmark.svg"
      alt=""
    />,
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original-wordmark.svg"
      alt=""
    />,
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sqlalchemy/sqlalchemy-plain.svg"
      alt=""
    />,
  ];

  return (
    <div id="technologies-container">
      <div className="general-padding">
        <h1>Tecnologías</h1>
        <div className="row technologies">
          {techs.map((item, index) => (
            <div
              key={index}
              className="col-6 col-md-4 d-flex justify-content-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
