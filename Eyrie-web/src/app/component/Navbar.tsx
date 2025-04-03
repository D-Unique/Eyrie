"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Properties", "About", "Contact us", "Blogs"];

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center px-6 py-4 md:px-12">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-white text-2xl font-bold tracking-wider hover:text-gray-200 transition-colors"
          >
            EYRIE<span className="text-xs align-top">™</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              key={item}
              className="text-white hover:text-orange-500 transition-colors duration-300 font-medium 
                        relative group"
            >
              {item}
              <span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 
                              group-hover:w-full transition-all duration-300"
              ></span>
            </Link>
          ))}
        </div>

        <Link
          href="/signin"
          className="bg-white text-black px-6 py-2 rounded-full font-medium 
                    hover:bg-orange-500 hover:text-white transition-all duration-300
                    transform hover:scale-105"
        >
          Sign in
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                key={item}
                className="text-white text-lg hover:text-orange-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
