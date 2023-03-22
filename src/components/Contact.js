import React from "react";
import emailjs from "emailjs-com";
//eslint-disable-next-line
import contact from "../contact.css";

//this code actually works and will send a message each and every time you hit send even though it doesnt appear to work. e.target.reset() works fast
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eu7nee4",
        "template_qz5bosi",
        e.target,
        "3Elph9tYT7VcFgbqx"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact h-screen bg-gradient-to-b from-gray-200 to-gray-500">
      <div className="pt-6 contact">
        <h1 className="flex items-center justify-center py-3 px-3 mr-6 text-gray-400 hover:text-gray-600 text-4xl font-bold">
          {" "}
          Email Me with Emailjs
        </h1>
        <br />
        <form id="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" />
          <br />
          <input type="email" name="user_email" placeholder="Your Email" />
          <br />
          <textarea name="message" placeholder="Message" />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
