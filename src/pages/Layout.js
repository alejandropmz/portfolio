import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../pages/Home";
import { ProjectsPage } from "./ProjectsPage";

export const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
