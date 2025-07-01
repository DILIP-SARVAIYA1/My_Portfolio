import React from "react";
import Buttons from "./Buttons";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <section className="w-full sm:min-h-[calc(100vh-4.5rem)] m-6 sm:mx-16">
        <div className="text-white mt-20 sm:mt-32">
          <h3 className="text-2xl sm:text-3xl text-green-400">
            Hey there!, I'm-
          </h3>
          <h1 className="text-5xl sm:text-8xl font-bold my-4 sm:mb-14">
            Dilip sarvaiya.
          </h1>
          <p className="text-xl sm:text-3xl">
            Software Engineer.
            <span className="text-gray-400"> A self-taught developer.</span>
          </p>
          <p className="text-xl my-10 text-gray-400">
            🚀 Currently specializing in
            <span className="text-green-400 font-bold "> MERN</span> stack.
          </p>
        </div>
        <Buttons />
      </section>
    </div>
  );
};

export default MainPage;
