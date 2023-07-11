import React from "react";
import "../styles/NotFound.css";
import notfound from "../assets/images/notfound.svg";

export default function NotFound() {
  return (
    <div className="container">
      <h1 className="title">Oops!</h1>
      <h2 className="title">404 Not Found Page</h2>
      <img src={notfound} alt="home" />
    </div>
  );
}
