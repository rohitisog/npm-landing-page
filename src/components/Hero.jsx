import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero bg-cover bg-center px-6 text-center h-full flex flex-col items-center justify-center ">
        <div className="text-white text-7xl font-semibold text-center pt-30 sm:w-1/2 w-full md:w-full">
          Build amazing
          <div>things</div>
        </div>
        <div className="text-white mt-20 md:w-1/2 lg:w-1/3">
          We're GitHub, the company behind the npm Registry and npm CLI. We
          offer those to the community for free, but our day job is building and
          selling useful tools for developers like you.
        </div>
        <div className="text-white mt-4 md:my-8 text-2xl font-semibold md:text-4xl md:w-1/2 lg:w-1/3">
          Take your JavaScript development up a notch
        </div>
        <div className="text-white mt-4 md:w-1/2 lg:w-1/3">
          Get started today for free, or step up to npm Pro to enjoy a premium
          JavaScript development experience, with features like private
          packages.
        </div>
        <div className="py-15 flex justify-center gap-8 ">
          <button className="font-bold  bg-yellow-400 px-10 py-4 md:px-14 rounded-full shadow-2xl shadow-black">
            Sign up for free
          </button>
          <button className="font-semibold px-8 py-4  md:px-14 rounded-full bg-gradient-to-r from-red-500 to-red-800 text-white border-2">
            Learn about Pro{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
