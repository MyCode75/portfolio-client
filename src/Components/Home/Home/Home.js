import React from "react";
import "./Home.css";
import HomeBanner from "../HomeBanner/HomeBanner";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
    </div>
  );
};

export default Home;
