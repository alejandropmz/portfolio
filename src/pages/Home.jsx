import React from "react";
import { AboutMe } from "../components/AboutMe";
import { Technologies } from "../components/Technologies";
import { HomeHeader } from "../components/HomeHeader";

export const Home = () => {
  return (
    <div id="home-container">
      <HomeHeader />
      <AboutMe />
      <Technologies />
    </div>
  );
};
