import React, { useState } from "react";
import Image from "next/image";
import { listings } from "../Data/listingsData";
import { HomeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Pagination from "./Pagination";

export default function Saved() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(listings.length / itemsPerPage);

  // Get the listings for the current page
  const currentListings = listings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
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
          <aside className="hidden lg:block bg-[#F2F2F2] p-6 self-start lg:sticky lg:top-20"></aside>

          {/* Main Details */}
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

            {/* Saved Properties List */}
            <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-4 overflow-hidden">
              <div className="space-y-6">
                {currentListings.map((listing) => (
                  <div
                    key={listing.id}
                    className="flex items-center bg-white shadow-md rounded-3xl p-4 gap-4 w-full overflow-hidden"
                  >
                    {/* Property Image */}
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                      <Image
                        src={listing.image}
                        alt={listing.title}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>

                    {/* Property Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-lg sm:text-lg md:text-2xl font-bold text-[#161616] mb-1 truncate">
                        {listing.price}
                      </p>
                      <h2 className="text-base sm:text-base md:text-xl font-semibold text-[#161616] mb-1 truncate">
                        {listing.title}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-[#555] flex items-center gap-2">
                        <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF4500] flex-shrink-0" />
                        <span className="truncate block">{listing.location}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
