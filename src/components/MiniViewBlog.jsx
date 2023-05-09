import React from "react";

export const MiniViewBlog = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://recursosmarketing.net/wp-content/uploads/2022/07/blog-como-recurso-de-marketing-840x420.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button id="read-more">
          Leer más
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
};
