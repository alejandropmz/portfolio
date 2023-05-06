import React from "react";
import { AboutMe } from "../components/AboutMe";

export const Home = () => {
  return (
    <div id="home-container" className="container-fluid">
      <h1>Hola mi nombre es Alejandro Pacheco✌</h1>
      <p>
        Enamorado de la programación y de la idea de que con unas cuantas líneas
        de código puedes lograr lo que quieras, expresar una idea o simplemente
        generar una solución a un problema que presentado en nuestra vida
        digital.
      </p>
      <button id="contact-button">Hablemos!</button>
      <AboutMe />
    </div>
  );
};
