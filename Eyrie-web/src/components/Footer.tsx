"use client";
import React from "react";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from "phosphor-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#B33205] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Eyrie™</h3>
          </div>

          {/* Property Listings */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Property Listings</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Apartments</li>
              <li>Bungalows</li>
              <li>Duplexes</li>
              <li>Sky scrapers</li>
            </ul>
          </div>

          {/* Listings */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Listings</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Buys</li>
              <li>Rent</li>
              <li>Shortlets</li>
            </ul>
          </div>

          {/* Furnishing */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Furnishing</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Furnished</li>
              <li>Semi- Furnished</li>
              <li>Unfurnished</li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <div className="flex items-center bg-[#C6542C] rounded-full p-2 mb-4">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent flex-1 px-4 text-sm text-white focus:outline-none placeholder:text-gray-300"
              />
              <button>
                <PaperPlaneTilt size={20} className="text-white" />
              </button>
            </div>
            <p className="text-gray-200 text-sm mb-4">
              Join our newsletter to stay up to date on features and releases
            </p>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FacebookLogo size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <TwitterLogo size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <InstagramLogo size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <LinkedinLogo size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
