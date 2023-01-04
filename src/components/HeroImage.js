import "./HeroImageStyles.css";

import React from "react";
import IntroImg from "../assets/reddesk.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="PC" />
      </div>
      <div className="content">
        <p>Hello World. My name is</p>
        <h1>Anthony Perry</h1>
        <p>
          Developer/Designer with 3 years experience seeks to build communities.
        </p>
        <br />
        <div>
          <Link to="/about" className="btn">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
