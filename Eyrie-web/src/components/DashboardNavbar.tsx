import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { HeartIcon, KeyIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  return (
    <div className="bg-[#F2F2F2]">
      {/* Top Section */}
      <header className="flex flex-wrap justify-between items-center px-4 py-3 md:px-12 bg-[#F2F2F2] rounded-full mx-auto mt-5 max-w-6xl mb-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <Image src="/images/logo.jpg" alt="Eyrie Logo" width={70} height={30} />
          {/* Location Dropdown */}
          <select className="ml-4 md:ml-36 w-full md:w-48 bg-[#FEFEFE] border border-[#B6B6B6] rounded-lg p-2 text-xs">
            <option>Select a Location</option>
            <option>Lagos</option>
            <option>Abuja</option>
          </select>
        </div>
        {/* User Actions */}
        <div className="flex items-center space-x-2 mt-4 md:mt-0 ml-auto md:ml-0">
          {/* Link to EN */}
          <Link href="/dashboard/saved" className="flex items-center text-[#161616] justify-center bg-white rounded-full p-2 shadow-md hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] active:bg-[#FF8A65] transition duration-300">
            <HeartIcon className="w-6 h-6 text-black" />
            <span className="ml-2 text-sm hidden sm:inline">en</span>
          </Link>
          {/* Link to WishList */}
          <Link href="/dashboard/saved" className="flex items-center text-[#161616] justify-center bg-white rounded-full p-2 shadow-md hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] active:bg-[#FF8A65] transition duration-300">
            <HeartIcon className="w-6 h-6 text-black" />
            <span className="ml-2 text-sm hidden sm:inline">Wishlists</span>
          </Link>
          {/* Link to Saved Listings */}
          <Link href="/dashboard/saved" className="flex items-center text-[#161616] justify-center bg-white rounded-full p-2 shadow-md hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] active:bg-[#FF8A65] transition duration-300">
            <KeyIcon className="w-6 h-6 text-black" />
            <span className="ml-2 text-sm hidden sm:inline">Saved</span>
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md hover:bg-[#FF4500]">
            <Image
              src="/images/testimony1.jpg"
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            />
          </div>
        </div>
      </header>
    </div>
  );
}