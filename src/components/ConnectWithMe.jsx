import React from "react";
import Footer from "./Footer";
import Buttons from "./Buttons";

const ConnectWithMe = () => {
  return (
    <div className=" h-full flex flex-col items-center justify-between">
      <section className="text-white  m-6 sm:mx-16 flex flex-col justify-center items-center h-2/3 gap-10">
        <h1 className="text-5xl font-bold mb-4">Keep In Touch.</h1>
        <p className="text-center">
          I'm currently specializing in{" "}
          <span className="text-green-400 font-bold "> MERN</span> stack. Feel
          free to get in touch and talk more about your projects.
        </p>
        <Buttons />
      </section>
      <Footer />
    </div>
  );
};

export default ConnectWithMe;
