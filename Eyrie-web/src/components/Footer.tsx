'use client';
import React from 'react';
import Link from 'next/link';
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Eyrie™</h3>
            <p className="text-gray-300 mb-4">
              Find your perfect property with Nigeria's most trusted real estate platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FacebookLogo size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <TwitterLogo size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <InstagramLogo size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <LinkedinLogo size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-300 hover:text-white">Properties</Link>
              </li>
              <li>
                <Link href="/agents" className="text-gray-300 hover:text-white">Agents</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties/bungalows" className="text-gray-300 hover:text-white">Bungalows</Link>
              </li>
              <li>
                <Link href="/properties/duplexes" className="text-gray-300 hover:text-white">Duplexes</Link>
              </li>
              <li>
                <Link href="/properties/apartments" className="text-gray-300 hover:text-white">Apartments</Link>
              </li>
              <li>
                <Link href="/properties/land" className="text-gray-300 hover:text-white">Land</Link>
              </li>
              <li>
                <Link href="/properties/commercial" className="text-gray-300 hover:text-white">Commercial</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Estate Road</p>
              <p>Lagos, Nigeria</p>
              <p>Email: info@eyrie.com</p>
              <p>Phone: +234 123 456 7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Eyrie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;