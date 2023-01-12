import React from "react";
import Gallery from "../components/Gallery";
import HeroImg2 from "../components/HeroImg2";

import Navbar from "../components/Navbar";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <Gallery />
    </div>
  );
};

export default Project;
