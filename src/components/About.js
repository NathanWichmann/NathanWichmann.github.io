import React from "react";
import image from "../Selfy.jpg";
import life from "../life-comfort.jpg";

const About = () => {
  return (
    <main className="relative about-me">
      <img
        src={life}
        alt="get out of your comfort zone"
        className="absolute h-full w-full"
      />
      <div className="p-5 lg:pt48 container mx-auto relative bg-gray-400 bg-opacity-400 rounded md:bg-opacity-400 rounded">
        <section className="big-gray-800 rounded-lg shadow-2xl lg:flex p-20 content-section">
          <img
            src={image}
            alt="potrait"
            className="rounded w-96 h-70 lg:w-96 lg:h-70 mr-8 "
          />
          <div>
            <div className="text-white-100 hover:text-white-400 text-3xl font-bold ">
              <strong>
                <span className="hello">Hello World!! </span>
              </strong>
              My name is Nathan Wichmann and I have recently completed Carleton
              University's Full-Stack web development program, with emphasis on
              HTML5, CSS3, JavaScript, JQuery, Bootstrap, Express.js, Node.js,
              React.js, MySql and MongoDB. I also received a certificate of
              completion from Harvard, for the Introduction to Computer Science
              course, with emphasis on C programming, Javascript and Python. I
              am currently finishing up Harvard's Web Programing with Python and
              Javasript course, with only the final project to complete the
              course. I also have a graduate certificate in Conflict Resolition
              from Carleton University as well as an undergraduate degree with
              honours, in Law. Coupled with my extensive experience in learning
              and my innate ability to problem solve, I would be a considerable
              asset for any development team. Thanks for stopping by and taking
              a look at my portfolio. aside: Treat yourself to something nice
              today, you deserve it!
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
