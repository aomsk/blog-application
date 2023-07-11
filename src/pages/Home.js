import React from "react";
import home from "../assets/images/home.svg";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <h2 className="title">Home</h2>
        <img src={home} alt="home" />
      </div>
    </>
  );
}
