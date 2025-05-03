"use client"; // This is a client component
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 py-3 md:px-12 bg-white rounded-full mx-auto mt-5 max-w-6xl mb-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt="Eyrie Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8 bg-white text-black">
        {[
          "Home",
          "Property listings",
          "Become a Seller",
          "Contacts",
          "About",
        ].map((item, index) => (
          <Link
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            key={index}
            className={`text-black hover:text-gray-600 transition-colors duration-300 ${
              item === "Property listings"
                ? "relative group flex items-center"
                : ""
            }`}
          >
            {item}
            {/* Dropdown Indicator for "Property listings" */}
            {item === "Property listings" && (
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </Link>
        ))}
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
            {[
              "Home",
              "Property listings",
              "Become a Seller",
              "Contacts",
              "About",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-black hover:text-gray-600 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="border border-gray-300 text-black px-6 py-2 rounded-full
                hover:bg-gray-100 transition-all duration-300"
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
        className="hidden md:block border border-gray-300 text-black px-6 py-2 rounded-full
        hover:bg-gray-100 transition-all duration-300"
      >
        Login
      </Link>
    </nav>
  );
}
