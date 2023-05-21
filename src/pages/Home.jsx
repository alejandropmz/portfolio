import React from "react";
import { AboutMe } from "../components/AboutMe";
import { Technologies } from "../components/Technologies";
import { HomeHeader } from "../components/HomeHeader";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { BlogHome } from "../components/BlogHome";

export const Home = () => {
  return (
    <div id="home-container">
      <HomeHeader />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="techs">
        <Technologies />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="blogs">
        <BlogHome />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};
