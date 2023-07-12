import React from "react";
import blogs from "../assets/data/blogs";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);

  useEffect(() => {
    // search title blog // เข็คว่า title ตรวกับ search มั้ย ใช้ includes()
    const result = blogs.filter((item) => item.title.includes(search));
    setFilterBlog(result);
    // ถ้า Blog title เป็นภาษาอังกฤษ
    // blogs.filter((item) => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }, [search]);

  return (
    <div className="blogs-container">
      <div className="serch-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Blog Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <article>
        {filterBlog.map((blog) => {
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
