import React from "react";
import "./HomeBanner.css";
import person from "../../../Assacts/bg-person.png";

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="banner-container">
        <div className="banner-info">
          <h1>
            I am your <br /> frontend web designer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            voluptatibus est corporis deleniti natus a deserunt debitis
            inventore dignissimos atque?
          </p>
          <button className="hire-me">Hire me</button>
        </div>
        <div className="banner-img">
          <img src={person} alt="person-images" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
