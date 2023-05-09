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
        <div id="carouselExample" class="carousel slide blog-carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <MiniViewBlog />
            </div>
            <div class="carousel-item">
              <MiniViewBlog />
            </div>
            <div class="carousel-item">
              <MiniViewBlog />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
