import "./WorkCardStyles.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="first-card" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a target="blank" href={props.view} className="btn">
            View
          </a>
          <a target="blank" href={props.source} className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
