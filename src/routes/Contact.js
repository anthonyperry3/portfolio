import React from "react";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="Contact"
        text="Message me if you want to work together."
      />
      <Form />
    </div>
  );
};

export default Contact;
