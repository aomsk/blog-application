import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "../assets/data/blogs";
import "../styles/DetailBlogs.css";

export default function DetailsBlog() {
  const { blogId } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);

  useEffect(() => {
    // find blog by ID
    const result = blogs.find((blog) => blog.id === Number(blogId));
    setBlogDetail(result);
  }, [blogId]);

  return (
    <div className="detail-container">
      <h1>{blogDetail?.title}</h1>
      <h3>Author: {blogDetail?.author}</h3>
      <div className="blog-image">
        <img src={blogDetail?.image_url} alt="" />
      </div>
      <p>{blogDetail?.content}</p>
    </div>
  );
}
