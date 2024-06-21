import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px]  w-full h-screen mx-auto flex flex-col text-center justify-center">
        <p className="uppercase text-[#00df9a] font-cold p-2">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <span className="md:text-5xl md:pl-4 sm:text-4xl text-xl font-bold pl-2">
            <Typewriter
              words={["BTB", "BTC", "SASS"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={140}
              deleteSpeed={150}
            />
          </span>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto text-black py-3">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
