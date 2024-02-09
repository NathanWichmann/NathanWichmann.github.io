import React from "react";
import image from "../Selfy.jpg";
import life from "../life-comfort.jpg";

const About = () => {
  return (
    <>
    <div className="relative">
      <img src={life} alt="get out of your comfort zone" className="w-full"/>
      <div className="bg-gray-300">
        </div>


<div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[60rem] flex-row">
  <div
    class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={image} alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6 bg-gray-300">
    <h6
      class="block mb-4 text-xl font-bold cursive leading:none lg:leading-snug home-nameleading-relaxed text-gray-700 uppercase">
      Hello World!!
    </h6>
    <p class="block mb-8 font-bold cursive leading:none lg:leading-snug home-name leading-relaxed ">
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
    </p>
    <a href="#" class="inline-block"><button
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
</div>  
</div> 
        
        
        
   </>     



  );
};

export default About;
