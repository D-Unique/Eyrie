"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, CaretDown, Bell, Globe } from "phosphor-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-6 md:px-12 shadow-sm rounded-[2rem] mx-auto mt-5 max-w-6xl mb-4">
      <div className="flex justify-between items-center">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[#161616]">
          <Link href="/" className="hover:text-[#FF4500] transition-colors font-medium">
            Home
          </Link>
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-[#FF4500] transition-colors font-medium"
            >
              Property listings
              <CaretDown size={16} className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <Link href="/properties/buy" className="block px-4 py-2 hover:bg-gray-100">
                  Buy
                </Link>
                <Link href="/properties/rent" className="block px-4 py-2 hover:bg-gray-100">
                  Rent
                </Link>
                <Link href="/properties/short-lets" className="block px-4 py-2 hover:bg-gray-100">
                  Short Lets
                </Link>
              </div>
            )}
          </div>
          <Link href="/become-seller" className="hover:text-[#FF4500] transition-colors font-medium">
            Become a Seller
          </Link>
          <Link href="/contacts" className="hover:text-[#FF4500] transition-colors font-medium">
            Contacts
          </Link>
          <Link href="/about" className="hover:text-[#FF4500] transition-colors font-medium">
            About
          </Link>
        </nav>

        {/* Icons & Login */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Globe size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Bell size={20} />
          </button>
          <Link href="/login" className="flex items-center space-x-2">
            <span className="hidden md:inline text-sm font-medium">Profile</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={18} />
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger */}
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
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="text-black hover:text-orange-500 font-medium">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-black hover:text-orange-500 font-medium flex items-center"
              >
                Property listings
                <CaretDown size={16} className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white shadow rounded-md">
                  <Link href="/properties/buy" className="block px-4 py-2 hover:bg-gray-100">
                    Buy
                  </Link>
                  <Link href="/properties/rent" className="block px-4 py-2 hover:bg-gray-100">
                    Rent
                  </Link>
                  <Link href="/properties/short-lets" className="block px-4 py-2 hover:bg-gray-100">
                    Short Lets
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link href="/become-seller" className="text-black hover:text-orange-500 font-medium">
                Become a Seller
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="text-black hover:text-orange-500 font-medium">
                Contacts
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-orange-500 font-medium">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="border border-gray-300 text-black px-6 py-2 rounded-full font-medium hover:bg-orange-500 hover:text-white"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;