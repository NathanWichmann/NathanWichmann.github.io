import React from "react";
import image from "../Selfy.jpg";
import life from "../life-comfort.jpg";

const About = () => {
  return (
    <main className="relative about-me">
      <img
        src={life}
        alt="get out of your comfort zone"
        className="absolute w-full"
      />
      <div className="p-5 lg:pt48 container mx-auto relative bg-gray-400 bg-opacity-400 rounded md:bg-opacity-400 rounded">
        <section className="big-gray-800 rounded-lg shadow-2xl lg:flex p-20 content-section">
          <img src={image} alt="potrait" className="rounded w-64 h-64 lg:w-96 lg:h96 mr-8 " />
          <div>
          
            <div className="text-white-100 hover:text-white-400 text-3xl font-bold "><strong><span className="hello">Hello World!! </span></strong>
                        My name is Nathan Wichmann and if you can't already tell, I like to be creative. Which is kinda
                        funny because I come from a very restrictive background. I have an undergraduate
                        degree in Law with honors and a graduate certificate in Conflict Resolution. Law can be very
                        clear and concise, just like coding. However, Conflict Resolution is irradic and
                        unpredictable, making me very capable in any given situation. Having worked for a top five bank
                        in Canada, I have extensive experience dealing with clients and resolving their
                        concerns. Currently, I am enroled in Carleton University's Full-Stack web development program,
                        with emphasis on HTML5, CSS3, JavaScript, JQuery, Bootstrap, Express.js, Node.js,
                        React.js, MySql and MongoDB. My education and ability to problem solve, combined with my interest in
                        Full-Stack development, make me a strong candidate for any company.</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
