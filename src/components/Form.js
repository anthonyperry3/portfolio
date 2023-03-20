import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

import "./FormStyles.css";

import React from "react";

const Form = () => {
  const onChange = () => {};

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w540yan",
        "template_5q4maho",
        form.current,
        "-KnC9CudsPj5GNk7m"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Subject</label>
        <input type="text" name="from_name"></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type Your Message Here"
          name="message"
        />
        <ReCAPTCHA
          sitekey="6LfmQgklAAAAAF1CSI6jQjy81RfXqpXCEz6bNsab"
          onChange={onChange}
        />
        <input className="btn" type="submit" value="Send"></input>
      </form>
    </div>
  );
};

export default Form;
