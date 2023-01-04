import "./GalleryCardStyles.css";

import React from "react";
import GalleryCard from "./GalleryCard";
import GalleryCardData from "./GalleryCardData";

const Gallery = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Art and Design Gallery</h1>
      <div className="project-container">
        {GalleryCardData.map((val, ind) => {
          return (
            <GalleryCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
