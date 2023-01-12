import "./GalleryCardStyles.css";

import React from "react";

const GalleryCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="first-card" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
