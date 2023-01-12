import "./FooterStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <h2>
        Experienced Graphic Designer and Developer looking to...
        <Link to="/about" className="more">
          read more
        </Link>
      </h2>
    </div>
  );
};

export default Footer;
