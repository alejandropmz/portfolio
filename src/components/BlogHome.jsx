import React from "react";
import { MiniViewBlog } from "./MiniViewBlog";

export const BlogHome = () => {
  return (
    <div id="blog-home-container">
      <div className="general-padding">
        <h1 className="text-center">Lee un poco sobre lo que escribo...</h1>
        <div id="no-carousel">
          <MiniViewBlog />
          <MiniViewBlog />
          <MiniViewBlog />
          <MiniViewBlog />
        </div>
        <div id="carouselExample" className="carousel slide blog-carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <MiniViewBlog />
            </div>
            <div className="carousel-item">
              <MiniViewBlog />
            </div>
            <div className="carousel-item">
              <MiniViewBlog />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
