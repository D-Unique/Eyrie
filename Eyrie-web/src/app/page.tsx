"use client"; // This is a client component
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Array of background images with correct filenames
  const backgrounds = [
    "/property1.jpg",
    "/property2.jpg",
    "/property3.jpg",
    "/property4.jpg",
  ];

  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // Rotation every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Note: Head component is not needed in app router, use metadata export instead */}

      {/* Background Images with Slide Effect */}
      <div className="fixed inset-0 z-0">
        {backgrounds.map((bg, index) => (
          <div
            key={bg}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentBgIndex ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              zIndex: index === currentBgIndex ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src={bg}
              alt="Property background"
              fill
              priority={index === 0}
              className="object-cover transition-opacity duration-500"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center px-6 py-4 md:px-12">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white text-2xl font-bold tracking-wider hover:text-gray-200 transition-colors"
            >
              EYRIE<span className="text-xs align-top">™</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {["Home", "Properties", "About", "Contact us", "Blogs"].map(
              (item) => (
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  key={item}
                  className="text-white hover:text-orange-500 transition-colors duration-300 font-medium relative group"
                >
                  {item}
                  <span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 
                                group-hover:w-full transition-all duration-300"
                  ></span>
                </Link>
              ),
            )}
          </div>

          <Link
            href="/signin"
            className="bg-white text-black px-6 py-2 rounded-full font-medium 
                      hover:bg-orange-500 hover:text-white transition-all duration-300
                      transform hover:scale-105"
          >
            Sign in
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            FIND YOUR PERFECT
            <br />
            HOME WITH <span className="text-orange-500">EYRIE</span>
          </h1>

          <p className="text-white text-lg md:text-xl max-w-2xl mb-10">
            Explore a curated selection of rentals properties that fit your
            lifestyle and budget
          </p>

          <Link
            href="/search"
            className="bg-white text-black font-medium px-10 py-4 rounded-full
                      hover:bg-orange-500 hover:text-white transition-all duration-300
                      transform hover:scale-105 hover:shadow-lg"
          >
            Start your search
          </Link>
        </div>
      </div>
    </div>
  );
}
