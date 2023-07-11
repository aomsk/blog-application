import React from "react";
import blogs from "../assets/data/blogs";
import "../styles/Blogs.css";

export default function Blogs() {
  return (
    <div className="blogs-container">
      <article>
        {blogs.map((blog) => {
          return (
            <div className="card" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.content.substring(0, 150)}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
}
