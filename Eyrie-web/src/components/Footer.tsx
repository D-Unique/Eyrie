"use client";
import React from "react";
import {
  FacebookLogo,
  GoogleLogo,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneRight,
} from "phosphor-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#B53100] text-[#FBFBFB] py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Mobile: Vertical layout */}
        <div className="flex flex-col space-y-8 lg:hidden mt-8">
          {/* Logo + App Download */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/footerlogo.png"
              alt="Eyrie Logo"
              width={80}
              height={40}
              className="mb-4"
            />

            <div className="flex flex-col items-center">
              <p className="text-sm mb-2">Download the Eyrie app</p>
              <Image
                src="/images/googleplay.png"
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold mb-3 text-[#FFFFFF]">
                Property Listings
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:underline">Apartments</li>
                <li className="cursor-pointer hover:underline">Bungalows</li>
                <li className="cursor-pointer hover:underline">Duplexes</li>
                <li className="cursor-pointer hover:underline">Sky Scrapers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3 text-[#FFFFFF]">
                Listings
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:underline">Buys</li>
                <li className="cursor-pointer hover:underline">Rent</li>
                <li className="cursor-pointer hover:underline">Shortlets</li>
              </ul>
            </div>

            <div className="col-span-2">
              <h3 className="text-base font-semibold mb-3 text-[#FFFFFF]">
                Furnishing
              </h3>
              <ul className="grid grid-cols-3 gap-2 text-sm">
                <li className="cursor-pointer hover:underline">Furnished</li>
                <li className="cursor-pointer hover:underline">
                  Semi-Furnished
                </li>
                <li className="cursor-pointer hover:underline">Unfurnished</li>
              </ul>
            </div>
          </div>

          {/* Subscribe - Mobile */}
          <div className="pt-4 border-t border-white/20">
            <h3 className="text-base font-semibold mb-3 text-center">
              Subscribe
            </h3>
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2 w-full">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent text-[#FFFFFF] placeholder-[#FFEDE6] outline-none px-2 w-4/5 text-sm"
              />
              <button className="text-[#FFFFFF] flex justify-center items-center w-1/5">
                <PaperPlaneRight size={18} />
              </button>
            </div>
            <p className="text-xs text-white/50 mt-3 text-center">
              Join our newsletter for updates
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              {[InstagramLogo, FacebookLogo, GoogleLogo, LinkedinLogo].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-[#FFEDE6] hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:mt-8">
          {/* Logo Section */}
          <div className="flex flex-col">
            <Image
              src="/images/footerlogo.png"
              alt="Eyrie Logo"
              width={80}
              height={40}
              className="mb-4"
            />

            <div className="mt-auto">
              <p className="text-sm mb-2">
                You can download the Eyrie app from
              </p>
              <Image
                src="/images/googleplay.png"
                alt="Get it on Google Play"
                width={120}
                height={40}
                className="cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
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
      </div>
    </footer>
  );
};

export default Footer;
