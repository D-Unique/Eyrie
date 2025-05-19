import { useState } from "react";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function HeroSection() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="relative min-h-[60vh] bg-[#F2F2F2] flex flex-col items-center justify-center text-center px-4">
      {/* Notification Banner - Mobile optimized */}
      {showBanner && (
        <div className="fixed sm:top-24 sm:right-24 z-50 bg-[#EBFFFD] border border-[#B7F5D8] rounded-xl shadow-md px-4 sm:px-6 py-2 flex gap-1 max-w-md animate-fade-in text-left mobile-notification">
          {/* Left icon */}
          <div className="mr-2 sm:mr-4 sm:-ml-2">
            <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B655B] mt-1 shrink-0" />
          </div>

          {/* Message content */}
          <div className="flex-1">
            <div className="font-semibold text-[#14B8A6] text-xs sm:text-sm">
              New listings available!
            </div>
            <div className="text-[10px] sm:text-xs text-[#0B655B] mt-0.5 sm:mt-1">
              Check out the latest properties added in your area.
              <br />
              <span className="underline cursor-pointer text-[#0B655B]">
                Tap here to explore
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setShowBanner(false)}
            className="ml-2 sm:ml-4 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <XCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 sm:mb-8 text-[#14B8A6]" />
          </button>
        </div>
      )}

      {/* Text Content */}
      <div className="z-10">
        <h1 className="text-base md:text-2xl lg:text-3xl font-bold mt-4 mb-2 lg:mb-4 text-[#555]">
          Your Next Home is <br />
          One Click Away with <br />
          <span className="text-[#161616] font-black text-3xl sm:text-4xl md:text-5xl mt-2 lg:mt-4 block">
            Eyrie
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-3 text-[#555]">
          Explore handpicked listings across top neighborhoods
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full max-w-6xl px-4">
        <Image
          src="/images/hero.png"
          alt="Hero House"
          width={1200}
          height={800}
          className="rounded-3xl object-cover"
        />
        {/* Button */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block">
          <button className="bg-[#FF4500] text-[#FFEDE6] px-12 py-3 text-base rounded-[32px] hover:bg-[#FF5722] transition duration-300">
            Check property Listings
          </button>
        </div>
      </div>

      {/* Trusted Section */}
      <div className="mt-6 flex justify-center items-center space-x-4 text-center max-w-6xl px-4">
        <p className="text-sm sm:text-base md:text-lg lg:text-lg text-[#555] font-medium">
          Trusted by 100+ Real Estate Developers
        </p>
        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={150}
          height={120}
          className="rounded-full border border-gray-300"
        />
      </div>

      {/* Estates Section */}
      <div className="w-screen bg-[#FEFEFE] mt-8 px-4 py-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 items-center justify-items-center max-w-none">
          <Image
            src="/images/sujimoto.png"
            alt="Sujimoto Logo"
            width={160}
            height={60}
            className="object-contain"
          />
          <Image
            src="/images/realestate.png"
            alt="Real Estate Logo"
            width={160}
            height={60}
            className="object-contain"
          />
          <Image
            src="/images/nueton.png"
            alt="Nueton Builders Logo"
            width={160}
            height={60}
            className="object-contain"
          />
          <Image
            src="/images/urbannexus.png"
            alt="Urban Nexus Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="py-6 bg-[#F2F2F2] mt-5">
        {/* Section Header */}
        <div className="flex items-center justify-between px-4 max-w-6xl mx-auto mb-6">
          <h2 className="text-xl font-bold">Our Services</h2>
        </div>
        {/* Services Grid */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-[#FEFEFE] shadow-md rounded-3xl p-6 text-center">
            <Image
              src="/images/service1.png"
              alt="Buy A Home"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-[#161616] mb-2">
              Buy A Home
            </h3>
            <p className="text-sm text-[#555] mb-4">
              Browse a wide range of homes that match your style and budget.
              From cozy apartments to spacious family houses, it's all here.
            </p>
            <button className="w-full h-[36px] px-[24px] py-[10px] bg-[#FBFBFB] text-[#FF4500] hover:text-white border border-[#FF4500] rounded-[32px] font-medium text-[12px] flex items-center justify-center gap-[10px] hover:bg-[#FF4500] active:bg-[#FF8A65] transition duration-300">
              Find Your Home
            </button>
          </div>
          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-3xl p-6 text-center">
            <Image
              src="/images/service2.png"
              alt="Sell Your Property"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-[#161616] mb-2">
              Sell Your Property
            </h3>
            <p className="text-sm text-[#555] mb-4">
              Get a free valuation, professional advice, and expert help to list
              your home and attract serious buyers.
            </p>
            <button className="w-full h-[36px] px-[24px] py-[10px] bg-[#FBFBFB] text-[#FF4500] hover:text-white border border-[#FF4500] rounded-[32px] font-medium text-[12px] flex items-center justify-center gap-[10px] hover:bg-[#FF4500] active:bg-[#FF8A65] transition duration-300">
              List My Property
            </button>
          </div>
          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-3xl p-6 text-center">
            <Image
              src="/images/service3.png"
              alt="Find A Rental"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-[#161616] mb-2">
              Find A Rental
            </h3>
            <p className="text-sm text-[#555] mb-4">
              Whether it's for a few months or long-term, we've got great spots
              lined up for you. Easily filter by budget, or location, and
              connect with trusted landlords.
            </p>
            <button className="w-full h-[36px] px-[24px] py-[10px] bg-[#FBFBFB] text-[#FF4500] hover:text-white border border-[#FF4500] rounded-[32px] font-medium text-[12px] flex items-center justify-center gap-[10px] hover:bg-[#FF4500] active:bg-[#FF8A65] transition duration-300">
              Explore Rentals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
