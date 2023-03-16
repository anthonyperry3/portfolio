import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/mypic.jpeg";
import ProfileBack from "../assets/codepic.jpeg";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a developer and graphic designer, with apprenticeships and
          bootcamps spanning 3 years of design and development experience. I am
          seeking a position to expand my development skills while building
          communities. My goal is to ultimately gain experience in order to
          bring my ideas to life and more.
        </p>
        <h3>My skills include:</h3>
        <ul>
          <li>React Native</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Webflow</li>
          <li>Wordpress</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Premiere Pro</li>
          <li>Angular</li>
        </ul>
        <br />
        <Link to="/project">
          <button className="btn">Projects</button>
        </Link>
        <br />
        <br />
        <Link to="/contact ">
          <button className="btn">Contact</button>
        </Link>
        <div className="resources">
          <a
            target="blank"
            href="https://www.linkedin.com/in/anthony-perry-400a2785/"
          >
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </a>
          <a target="blank" href="https://github.com/anthonyperry3">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </a>
          <a target="blank" href="/Resume.pdf">
            <FaFilePdf
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={ProfilePic} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={ProfileBack} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
