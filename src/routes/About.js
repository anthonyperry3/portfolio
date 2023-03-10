import React from "react";
import AboutContent from "../components/AboutContent";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT."
        text="Developer/Designer with 3 years experience seeks to build communities."
      />
      <AboutContent />
    </div>
  );
};

export default About;
