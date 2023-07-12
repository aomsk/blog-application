import React from "react";
import blogs from "../assets/data/blogs";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="blogs-container">
      <article>
        {blogs.map((blog) => {
          return (
            <div className="card" key={blog.id}>
              <Link to={`/blog/${blog.id}`}>
                <h2>{blog.title}</h2>
              </Link>
              <p>{blog.content.substring(0, 150)}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
}
