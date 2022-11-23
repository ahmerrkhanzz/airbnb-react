import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { GlobeAltIcon, UserCircleIcon } from "@heroicons/react/24/outline";

function Headers() {
  return (
    <header className="sticky grid grid-cols-3 top-0 z-50 bg-white shadow-md p-5 md:px-10">
      {/* Left Section */}
      <div className="relative flex items-center h-8 cursor-pointer my-auto">
        <Image
          src={logo}
          alt="airbnb"
          objectFit="contain"
          layout="fill"
          objectPosition="left"
        />
      </div>

      {/* Middle Section */}
      <div className="flex items-center md:border-2 rounded-full p-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow text-sm pl-2 bg-transparent outline-none text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer md:mx-2" />
      </div>

      {/* Right Section */}
      <div className="flex items-center text-sm justify-end">
        <p className="font-medium hover:bg-gray-100 cursor-pointer py-2 px-3 rounded-full hidden md:inline">
          Airbnb your home
        </p>
        <GlobeAltIcon className="h-9 hover:bg-gray-100 cursor-pointer p-2 rounded-full" />
        <div className="flex cursor-pointer rounded-full border-2 border-gray-100 p-2 hover:shadow-md ml-2">
          <Bars3Icon className="h-6 mr-1" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Headers;
