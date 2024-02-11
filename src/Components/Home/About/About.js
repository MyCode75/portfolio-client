import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h3 className="title">About Me</h3>
        <div className="about-info">
          <h5>Hello</h5>
          <h4>I'm React</h4>
          <h3>Developer</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi amet
            quidem ab reprehenderit. Facere accusamus recusandae tempora
            voluptates a sed! Repellat amet molestias at expedita numquam
            placeat soluta. Dolore alias in, deserunt eius rerum asperiores
            consequuntur nesciunt, sit, illo provident voluptates ipsum aliquam
            numquam praesentium! Quod eligendi non optio soluta!
          </p>
          <button className="cv-button">Download My Cv</button>
        </div>
      </div>
    </div>
  );
};

export default About;
