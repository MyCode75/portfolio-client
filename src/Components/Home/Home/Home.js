import React from "react";
import "./Home.css";
import HomeBanner from "../HomeBanner/HomeBanner";
import About from "../About/About";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <About id="/about" />
      <Skills />
    </div>
  );
};

export default Home;
