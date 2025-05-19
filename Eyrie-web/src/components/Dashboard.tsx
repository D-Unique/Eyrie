import { listings } from "../Data/listingsData";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaHeart } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { HomeIcon } from "@heroicons/react/24/outline";
import Pagination from "./Pagination";
import { BuyBadgeIcon, RentBadgeIcon } from "@/components/Icon";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(listings.length / itemsPerPage);

  // Get the listings for the current page
  const currentListings = listings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <aside className="bg-white shadow-md rounded-3xl p-6 self-start lg:sticky lg:top-20">
            <h3 className="text-2xl font-semibold mb-4">Filter</h3>
            <div className="space-y-4">
              <div>
                <select className="w-full border border-gray-300 rounded-xl p-3 text-sm">
                  <option>Location</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                </select>
              </div>
              <div>
                <select className="w-full border border-gray-300 rounded-xl p-3 text-sm">
                  <option>Price Range</option>
                  <option>₦50,000,000 - ₦100,000,000</option>
                </select>
              </div>
              <div>
                <select className="w-full border border-gray-300 rounded-xl p-3 text-sm">
                  <option>Property Type</option>
                  <option>Bungalow</option>
                  <option>Duplex</option>
                </select>
              </div>
              <div>
                <select className="w-full border border-gray-300 rounded-xl p-3 text-sm">
                  <option>Bedroom</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div>
                <select className="w-full border border-gray-300 rounded-xl p-3 text-sm">
                  <option>Furnishing</option>
                  <option>Furnished</option>
                  <option>Unfurnished</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="mb-6 px-4">
              <div className="flex items-center text-sm text-[#555] space-x-2 mb-6">
                <HomeIcon className="h-5 w-5 text-[#161616]" />
                <div className="flex items-center space-x-1">
                  <span className="text-[#161616]">Main Page</span>
                  <span>&gt;&gt;</span>
                  <span className="text-[#161616]">Categories</span>
                  <span>&gt;&gt;</span>
                  <span className="text-[#161616]">Bungalows</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4">Bungalows</h1>
              <p className="text-sm text-[#555]">
                Get the best-suited bungalows at the best prices
              </p>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 mx-auto">
              {currentListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200"
                >
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
                        <span className="truncate">
                          {listing.bathrooms} Bath
                        </span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MdSquareFoot className="text-gray-400" />
                        <span className="truncate">{listing.size}</span>
                      </span>
                    </div>
                    {/* Button */}
                    <Link
                      href={`/dashboard/listing/${listing.id}`}
                      className="w-full h-[36px] px-[24px] py-[10px] bg-[#FBFBFB] text-[#000000] border border-[#000000] rounded-[32px] font-medium text-[12px] leading-[24px] font-inter flex items-center justify-center gap-[10px] hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] active:bg-[#FF8A65] transition duration-300"
                    >
                      View Details &gt;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
