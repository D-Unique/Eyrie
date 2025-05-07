"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import FeaturedListings from "@/components/FeaturedListings";
import PopularListings from "@/components/PopularListings";
import RecentlyViewed from "@/components/RecentlyViewed";
import SearchBar from "@/components/SearchBar";
import CategorySidebar from "@/components/CategorySidebar";
import FilterSidebar from "@/components/FilterSidebar";
import KeyGraphic from "@/components/key";
import FlashSalesTimer from "@/components/FlashSalesTimer";
import Footer from "@/components/Footer";

// Define promotional banner images
const promotionalBanners = [
  {
    id: 1,
    image: "/images/banner1.jpg",
    alt: "New Properties Banner",
    link: "/new-properties",
  },
  {
    id: 2,
    image: "/images/banner2.jpg",
    alt: "Premium Listings Banner",
    link: "/premium-listings",
  },
  {
    id: 3,
    image: "/images/banner3.jpg",
    alt: "Special Offers Banner",
    link: "/special-offers",
  },
];

const openHouseImages = [
  "/images/feature1.jpg",
  "/images/duplex.jpg",
  "/images/duplex2.jpg",
  "/images/feature7.jpg",
  "/images/feature3.jpg",
];

export default function Markeplace() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        <div className="my-6">
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <CategorySidebar />

            <div className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">New</h2>
                <div className="flex flex-col gap-3">
                  {/* Open House listings will go here */}
                  {openHouseImages.map((imageSrc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                        <img
                          src={imageSrc}
                          alt={`Open House ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Open House</p>
                        <p className="text-gray-500 text-xs">Lagos, Nigeria</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <FilterSidebar
                onApplyFilters={(filters) => {
                  console.log("Applied filters:", filters);
                  // You can later use the filters to filter your listings.
                }}
              />
            </div>

            <div className="mt-6">
              <KeyGraphic />
            </div>
          </div>

          <div className="lg:col-span-9">
            <HeroSection
              imageUrl="/images/marketplace.png"
              heading="Your Next Home Is One Click Away With"
              highlightText="Eyrie"
              subText="Find your ideal space in top locations"
              showButton={false}
            />

            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">Browse By Categories</h2>
              <HorizontalScrollSection />
            </div>

            <div className="mt-6">
              <FlashSalesTimer
                initialHours={3}
                initialMinutes={12}
                initialSeconds={24}
              />
            </div>

            <div className="mt-10">
              <FeaturedListings title="Featured Listings" />
            </div>

            <div className="mt-10">
              <PopularListings title="Popular Listings" />
            </div>

            <div className="py-6">
              {/* Promotional Banners */}
              <div className="mb-10 max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Special Offers</h2>
                  <button className="text-sm font-medium text-gray-500 hover:text-gray-800">
                    View All
                  </button>
                </div>

                {/* Horizontally aligned banner images */}
                <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
                  {promotionalBanners.map((banner) => (
                    <a
                      key={banner.id}
                      href={banner.link}
                      className="min-w-[280px] sm:min-w-[320px] h-[160px] rounded-2xl flex-shrink-0 overflow-hidden"
                    >
                      <Image
                        src={banner.image}
                        alt={banner.alt}
                        width={320}
                        height={160}
                        className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
              {/* Recently Viewed Listings */}
              <RecentlyViewed />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
