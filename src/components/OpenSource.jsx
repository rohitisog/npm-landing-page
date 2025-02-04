import React from "react";

const OpenSource = () => {
  return (
    <>
      <div className="border-b-1 border-neutral-300 text-center flex flex-col justify-center items-center px-6 py-16">
        <img
          className="h-24 w-24 mt-20 mb-6"
          src="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png"
          alt="Open Source"
        />

        <h1 className="text-2xl font-semibold py-4 md:w-3/4 lg:w-1/2 lg:text-4xl">
          Bring the best of open source to you, your team, and your company
        </h1>

        <p className="py-2 pb-20 md:w-3/4 lg:w-1/2 text-lg leading-relaxed">
          Relied upon by more than 17 million developers worldwide, npm is
          committed to making JavaScript development elegant, productive, and
          safe. The free npm Registry has become the center of JavaScript code
          sharing, and with more than two million packages, the largest software
          registry in the world. Our other tools and services take the Registry,
          and the work you do around it, to the next level.
        </p>
      </div>
    </>
  );
};

export default OpenSource;
