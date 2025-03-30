/**
 * @file
 * @author "Unigwe Emmanuel"
 * @description "This component is the Navbar component"
 * @param {void}
 * @returns {JSX.Element} - "This returns the Navbar component"
 */
"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`flex fixed top-0 left-0 right-0 z-50 w-full bg-black shadow-md  opacity-90 ${open ? "max-sm:h-44 max-sm:opacity-100" : ""} `}
    >
      <nav className=" flex flex-rol gap-[700px] space-x-4 w-full h-[40px] max-sm:gap-[80px] max-sm:mx-auto">
        <Link
          href="/"
          className="flex items-center ml-32 my-auto relative top-7  max-sm:ml-10 max-sm:w-16"
        >
          <Image
            src="/logo.jpg"
            alt="Eyrie Logo"
            width={80}
            height={1}
            loading="eager"
          />
        </Link>

        <div
          className={`hidden  max-sm:items-center max-sm:justify-start  max-sm:flex-col  max-sm:h-[1000px]  max-sm:mt-4 ${open ? "max-sm:flex" : "hidden"} `}
        >
          <div className="text-sm space-y-4  text-center">
            <a
              href="#responsive-header"
              className="block mt-4 text-[#e6bf33] hover:text-[#FFF2C2] "
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 text-[#e6bf33] hover:text-black "
            >
              Properties
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 text-[#e6bf33] hover:text-black"
            >
              About
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-[#e6bf33] border-black hover:border-transparent hover:text-white hover:bg-black mt-4 max-sm:px-2"
            >
              Sign In
            </a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setOpen(true)}
              className={` text-[#e6bf33] text-2xl  ml-40 mt-3 cursor-pointer ${open ? "hidden" : ""}`}
            />

            <FontAwesomeIcon
              icon={faClose}
              className={`text-[#e6bf33] text-2xl  mr-8 mt-8 cursor-pointer ${open ? "" : "hidden"}`}
              onClick={() => setOpen(false)}
            />
          </div>
        </div>

        <div className=" flex items-center max-sm:hidden">
          <div className="text-sm space-x-14 lg:flex-grow ">
            <a
              href="#responsive-header"
              className="block mt-4 text-[#e6bf33] lg:inline-block lg:mt-0 hover:text-[#FFF2C2] mr-4"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#e6bf33] hover:text-[#FFF2C2] mr-4"
            >
              Properties
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#e6bf33] hover:text-[#FFF2C2]"
            >
              About
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-[#e6bf33] border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
