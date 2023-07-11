import React from "react";
import about from "../assets/images/about.svg";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <div className="container">
        <h2 className="title">About</h2>
        <img src={about} alt="home" />
      </div>
    </>
  );
}
