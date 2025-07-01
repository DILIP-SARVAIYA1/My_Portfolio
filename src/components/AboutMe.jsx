import React from "react";
import myImage from "../images/myImage.jpg";

const AboutMe = () => {
  return (
    <section className="text-white  m-6 sm:mx-16">
      <div className=" sm:flex sm:gap-4 justify-center sm:justify-between sm:items-center">
        <div className="sm:flex sm:flex-col sm:gap-4 sm:w-2/4">
          <h2 className="text-2xl font-bold mb-4">⚡ About Me</h2>
          <p>
            Hey! I'm Dilip sarvaiya, I've been close to a computer since an
            early age, and been passionate about it ever since. I really liked
            to build stuff using no-code tools back in 2010, and from that, I
            explored how to code myself, fast-forward to today, I do programming
            in various languages and technologies, and had the privilege to
            worked in a Recruitment Company and a SaaS Company I'm interested in
            building something awesome with code and automate tasks with code,
            currently focused on Web & Mobile Development, Open Source and
            Competitive Programming When I'm not coding I play games with my
            friends, watch some show on Netflix.
          </p>
        </div>
        <div className="my-6">
          <img
            className="w-full sm:h-96 object-fill rounded-full"
            src={myImage}
            alt="myImage"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
