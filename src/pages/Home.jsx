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
      <AboutMe />
      <Technologies />
      <Projects />
      <BlogHome />
      <Contact />
    </div>
  );
};
