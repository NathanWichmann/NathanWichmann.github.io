import React from "react";
import image from "../ancient-computer2.png";

const Home = () => {
  return (
    <main>
      <section className="relative flex justify-center pb-5 pt-3 px-3">
        <h1 className="text-4xl font-bold cursive leading:none lg:leading-snug home-name ">
          <p>
            Hello, My name is Nathan Wichmann and I am a budding Full Stack Web
            Developer.
          </p>
          <ol>
            My stacks are:
            <li>1. Mongodb, Express, React and Node.js.</li>
            <li>2. Django/Flask, Python and MariaDB/SQlite.</li>
          </ol>
        </h1>
      </section>
      <img src={image} alt="Ancient-computer" className="w-full h-full" />
    </main>
  );
};

export default Home;
