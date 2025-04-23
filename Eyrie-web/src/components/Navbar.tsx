"use client"; // This is a client component
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 py-3 md:px-12 bg-[#FEFEFE] rounded-[20rem] mx-auto mt-5 max-w-6xl mb-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt="Eyrie Logo"
            width={70}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8 bg-[#FEFEFE] text-[#161616]">
        {["Home", "Property listings", "Become a Seller", "Contacts", "About"].map(
          (item, index) => (
            <Link
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              key={index}
              className={`text-[#161616] hover:text-[#FF4500] transition-colors duration-300 font-medium ${
                item === "Property listings" ? "relative group" : ""
              }`}
            >
              {item}
              {/* Dropdown Indicator for "Property listings" */}
              {item === "Property listings" && (
                <span className="ml-1 text-[#161616] group-hover:text-[#FF4500] transition-colors duration-300">
                  ▼
                </span>
              )}
            </Link>
          )
        )}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-lg z-50 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Property listings", "Become a Seller", "Contacts", "About"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-black hover:text-orange-500 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                href="/login"
                className="border border-gray-300 text-black px-6 py-2 rounded-full font-medium 
                          hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Login Button (Visible on Desktop) */}
      <Link
        href="/login"
        className="hidden md:block border border-[#555] text-[#161616] px-6 py-2 rounded-full font-medium 
                  hover:bg-[#FF4500] hover:text-white transition-all duration-300"
      >
        Login
      </Link>
    </nav>
  );
}