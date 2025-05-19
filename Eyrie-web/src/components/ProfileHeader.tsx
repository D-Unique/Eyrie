"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  BellIcon,
  GlobeAltIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Header({
  mobileMenuOpen,
  toggleMobileMenu,
}: HeaderProps) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = () => {
    console.log("Search query:", query);
  };

  return (
    <header className="bg-[#FEFEFE] sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 py-2 sm:py-3">
          {/* Top Row: Logo + Mobile Menu Toggle */}
          <div className="flex justify-between items-center w-full sm:w-auto">
            <Image
              src="/images/logo.png"
              alt="Eyrie Logo"
              width={75}
              height={35}
              className="h-[35px] w-auto"
              priority
            />

            {isClient && (
              <button
                className="sm:hidden text-gray-700 hover:text-gray-900"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            )}
          </div>

          {/* Middle + Bottom Header Section */}
          {isClient && (
            <div
              className={`flex flex-col sm:flex-row items-center justify-between w-full bg-[#FEFEFE] rounded-xl lg:rounded-full p-2 sm:p-3 gap-3 shadow-md ${
                mobileMenuOpen ? "flex" : "hidden sm:flex"
              }`}
              style={mobileMenuOpen ? { marginBottom: "1rem" } : {}}
            >
              {/* Rest of your header content remains the same */}
              {/* Search Bar */}
              <div className="flex items-center border border-[#161616] rounded-full px-2 py-1 sm:px-3 sm:py-2 w-full">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  onClick={handleSearch}
                  className="text-[#161616] bg-white rounded-full p-1 sm:p-2 hover:bg-[#FF4500] hover:text-white transition"
                >
                  <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button className="text-[#161616] bg-white rounded-full p-1 sm:p-2 hover:bg-[#FF4500] hover:text-white transition">
                  <MicrophoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Compact Controls */}
              <div className="flex flex-wrap items-center gap-2 justify-between w-full">
                {/* Location Selector */}
                <div className="flex items-center border border-[#161616] rounded-full px-2 py-1 sm:px-3">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="outline-none bg-transparent text-xs sm:text-sm text-gray-700"
                  >
                    <option value="">Select location</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="port-harcourt">Port Harcourt</option>
                    <option value="ibadan">Ibadan</option>
                    <option value="enugu">Enugu</option>
                  </select>
                </div>

                {/* Language Selector */}
                <div className="flex items-center cursor-pointer bg-white rounded-full p-1 sm:p-2 shadow hover:bg-[#FF4500] hover:text-white transition">
                  <GlobeAltIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#555] mr-1" />
                  <span className="text-xs sm:text-sm">en</span>
                </div>

                {/* Notifications */}
                <div className="flex items-center cursor-pointer bg-white rounded-full p-1 sm:p-2 shadow hover:bg-[#FF4500] hover:text-white transition">
                  <BellIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#555]" />
                  <span className="hidden sm:block text-xs sm:text-sm ml-1">
                    Notification
                  </span>
                </div>

                {/* Profile Image */}
                <div className="hidden sm:block cursor-pointer">
                  <Image
                    src="/images/testimony1.jpg"
                    alt="User profile picture"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
