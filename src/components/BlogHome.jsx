import React from "react";
import { MiniViewBlog } from "./MiniViewBlog";

export const BlogHome = () => {
  return (
    <div id="blog-home-container">
      <div className="general-padding">
        <h1 className="text-center">Lee un poco sobre lo que escribo...</h1>
        <div className="d-flex">
          <MiniViewBlog />
          <MiniViewBlog />
          <MiniViewBlog />
        </div>
      </div>
    </div>
  );
};
