import React, { useEffect, useState } from "react";
import FlashSalesTimer from "@/components/FlashSalesTimer";
import { listings as allListings } from "../Data/listingsData";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BuyBadgeIcon, RentBadgeIcon } from "@/components/Icon";

// TypeScript type for a listing
type Listing = {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  type: string;
};

export default function FeaturedListings() {
  const [randomListings, setRandomListings] = useState<Listing[]>([]);

  useEffect(() => {
    // Shuffle the listings array and select 8 random listings
    const shuffledListings = [...allListings].sort(() => Math.random() - 0.5);
    setRandomListings(shuffledListings.slice(0, 4));
  }, []);

  return (
    <div className="py-12 bg-[#F2F2F2]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 max-w-6xl mx-auto mb-8">
        <FlashSalesTimer
          initialHours={3}
          initialMinutes={12}
          initialSeconds={24}
        />
      </div>

      {/* Listings Container */}
      <div className="w-full max-w-6xl px-4 mx-auto">
        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex space-x-4 w-max">
            {randomListings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200"
                style={{ minWidth: "280px" }}
              >
                {/* Card Header with Image */}
                <div className="relative">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <FaHeart className="absolute top-4 right-4 text-2xl w-6 text-[#FFEDE6] hover:text-[#FF4500] transition cursor-pointer" />
                </div>
                {/* Content */}
                <div className="p-4">
                  {/* Price and Badge */}
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg text-gray-800 truncate">
                      {listing.price}
                    </p>
                    <div className="flex items-center gap-1">
                      {listing.type === "Buy" ? (
                        <span className="flex items-center gap-1">
                          <BuyBadgeIcon />
                          <span className="text-sm font-medium">Buy</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <RentBadgeIcon />
                          <span className="text-sm font-medium">Rent</span>
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Title and Location */}
                  <h3 className="text-gray-700 font-semibold text-base mb-1 truncate">
                    {listing.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 truncate">
                    {listing.location}
                  </p>
                  {/* Features */}
                  <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                    <span className="flex items-center space-x-1">
                      <FaBed className="text-gray-400" />
                      <span className="truncate">{listing.bedrooms} Bed</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaBath className="text-gray-400" />
                      <span className="truncate">{listing.bathrooms} Bath</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MdSquareFoot className="text-gray-400" />
                      <span className="truncate">{listing.size}</span>
                    </span>
                  </div>
                  {/* Button */}
                  <button className="w-full h-[36px] px-[24px] py-[10px] bg-[#FBFBFB] text-[#000000] border border-[#000000] rounded-[32px] font-medium text-[12px] leading-[24px] font-inter flex items-center justify-center gap-[10px] hover:bg-[#FF4500] active:bg-[#FF8A65] transition duration-300">
                    View Details &gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {randomListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200"
            >
              {/* Card Header with Image */}
              <div className="relative">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <FaHeart className="absolute top-4 right-4 text-2xl w-6 text-[#FFEDE6] hover:text-[#FF4500] transition cursor-pointer" />
              </div>
              {/* Content */}
              <div className="p-4">
                {/* Price and Badge */}
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-[#161616] truncate">
                    {listing.price}
                  </p>
                  <div className="flex items-center gap-1">
                    {listing.type === "Buy" ? (
                      <span className="flex items-center gap-1">
                        <BuyBadgeIcon />
                        <span className="text-sm font-medium">Buy</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <RentBadgeIcon />
                        <span className="text-sm font-medium">Rent</span>
                      </span>
                    )}
                  </div>
                </div>
                {/* Title and Location */}
                <h3 className="text-[#161616] font-semibold text-base mb-1 truncate">
                  {listing.title}
                </h3>
                <p className="text-[#555] text-sm mb-4 truncate">
                  {listing.location}
                </p>
                {/* Features */}
                <div className="flex items-center justify-between text-[#555] text-xs mb-4">
                  <span className="flex items-center space-x-1">
                    <FaBed className="text-[#555]" />
                    <span className="truncate">{listing.bedrooms} Bed</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaBath className="text-[#555]" />
                    <span className="truncate">{listing.bathrooms} Bath</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MdSquareFoot className="text-[#555]" />
                    <span className="truncate">{listing.size}</span>
                  </span>
                </div>
                {/* Button */}
                <button className="w-full h-[36px] px-[24px] py-[10px] bg-[#FBFBFB] text-[#000000] border border-[#000000] rounded-[32px] font-medium text-[12px] leading-[24px] font-inter flex items-center justify-center gap-[10px] hover:bg-[#FF4500] hover:text-[#FEFEFE] active:bg-[#FF8A65] transition duration-300">
                  View Details &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
