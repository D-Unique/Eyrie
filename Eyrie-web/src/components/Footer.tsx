"use client";
import React from "react";
import {
  FacebookLogo,
  GoogleLogo,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneRight,
} from "phosphor-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#B53100] text-[#FBFBFB] py-12">
      <div className="max-w-6xl mx-auto px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Logo Section */}
        <div>
          <h3 className="text-2xl text-[#FBFBFB] font-black mb-4">Eyrie™</h3>
        </div>

        {/* Property Listings */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-[#FFFFFF]">
            Property Listings
          </h3>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>Apartments</li>
            <li>Bungalows</li>
            <li>Duplexes</li>
            <li>Sky Scrapers</li>
          </ul>
        </div>

        {/* Listings */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-[#FFFFFF]">
            Listings
          </h3>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>Buys</li>
            <li>Rent</li>
            <li>Shortlets</li>
          </ul>
        </div>

        {/* Furnishing */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-[#FFFFFF]">
            Furnishing
          </h3>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>Furnished</li>
            <li>Semi-Furnished</li>
            <li>Unfurnished</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="lg:col-span-2">
          <h3 className="text-base font-semibold mb-4 text-[#FFFFFF]">
            Subscribe
          </h3>
          <div className="flex items-center bg-white/20 rounded-full px-4 py-2 max-w-md w-full">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-transparent text-[#FFFFFF] placeholder-[#FFEDE6] outline-none px-4 w-4/5"
            />
            <button className="text-[#FFFFFF] flex justify-center items-center w-1/5">
              <PaperPlaneRight size={20} />
            </button>
          </div>
          <p className="text-sm text-white/50 mt-4 mb-8">
            Join our newsletter to stay up to date on features and releases
          </p>
          <div className="flex space-x-4 mt-4 justify-end">
            <a href="#" className="text-[#FFEDE6] hover:text-[#FFFFFF]">
              <InstagramLogo size={18} />
            </a>
            <a href="#" className="text-[#FFEDE6] hover:text-[#FFFFFF]">
              <GoogleLogo size={18} />
            </a>
            <a href="#" className="text-[#FFEDE6] hover:text-[#FFFFFF]">
              <FacebookLogo size={18} />
            </a>
            <a href="#" className="text-[#FFEDE6] hover:text-[#FFFFFF]">
              <LinkedinLogo size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
