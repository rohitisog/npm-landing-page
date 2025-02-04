import React from "react";
import { Heart, Search } from "lucide-react";

const Header = () => {
  const navLinks = [
    { to: "/", text: "Pro" },
    { to: "/", text: "Teams" },
    { to: "/", text: "Pricing" },
    { to: "/", text: "Documentation" },
  ];

  return (
    <div className="mb-4 md:mb-0">
      <div className="h-3 bg-gradient-to-r from-orange-600 to-pink-600"></div>

      <nav className="border-b border-b-neutral-300 flex justify-start p-4 gap-4">
        <div className="hidden sm:block sm:px-4">
          <Heart color="#000" fill="#000" />
        </div>
        {navLinks.map((links, index) => (
          <div
            key={index}
            className="cursor-pointer pl-4 text-xs sm:text-sm md:text-base"
          >
            {links.text}
          </div>
        ))}
      </nav>

      <div className="p-6 flex justify-between items-center">
        <div>
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
            alt="npm logo"
          />
        </div>

        <div className="flex justify-between w-full max-w-4xl">
          <div className="relative flex items-center bg-neutral-200 flex-grow ml-4">
            <div className="absolute left-2">
              <Search color="#000000" />
            </div>
            <input
              className="py-3 pl-10 pr-4 w-full focus:border-black focus:outline-none focus:rounded-none text-xs sm:text-sm md:text-base"
              type="text"
              name="search"
              id="search"
              placeholder="Search packages"
            />
            <button className="bg-black text-white font-bold px-4 py-3 cursor-pointer text-xs sm:text-sm md:text-base">
              Search
            </button>
          </div>

          <button className="hidden md:block ml-8 px-3 py-2 border border-neutral-300 hover:text-neutral-500 text-xs sm:text-sm md:text-base">
            Sign Up
          </button>
          <button className="hidden md:block px-5 py-2 text-xs sm:text-sm md:text-base">
            Sign In
          </button>
        </div>
      </div>

      <div className="md:hidden flex justify-center gap-4">
        <button className="px-5 py-2 border border-neutral-300 hover:text-neutral-500 text-xs sm:text-sm">
          Sign Up
        </button>
        <button className="px-5 py-2 cursor-pointer border-neutral-300 hover:text-neutral-500 text-xs sm:text-sm">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
