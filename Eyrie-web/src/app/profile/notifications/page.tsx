"use client";

import { useState } from "react";
import Header from "@/components/ProfileHeader";
import Sidebar from "@/components/ProfileSidebar";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { HeartIcon } from "@heroicons/react/24/outline";
import { BuyBadgeIcon, RentBadgeIcon } from "@/components/Icon";

interface Notification {
  id: number;
  title: string;
  description: string;
  content?: {
    price: string;
    propertyTitle: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
    type: "Buy" | "Rent";
  };
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Your Saved Item has been sold!",
    description: "Luxury Duplex at Victoria Island is no longer available",
    content: {
      price: "₦70,000,000",
      propertyTitle: "Luxury Duplex",
      location: "Victoria Island, Nigeria",
      bedrooms: 3,
      bathrooms: 2,
      size: "1,500 Sqft",
      type: "Rent",
    },
  },
  {
    id: 2,
    title: "New Update on our app soon!",
    description: "The latest version will soon be ready to download!",
  },
];

export default function Notifications() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNotification, setActiveNotification] =
    useState<Notification | null>(notifications[0]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNotificationClick = (notification: Notification) => {
    setActiveNotification(notification);
  };

  return (
    <>
      <div className="bg-[#FEFEFE] min-h-screen">
        <Header
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-8">
          <Sidebar />

          {/* Notification List */}
          <section className="col-span-2 lg:mt-8">
            <div className="space-y-4 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 border rounded-xl p-1 shadow-sm cursor-pointer transition-colors ${
                    activeNotification?.id === notification.id
                      ? "bg-[#FF4500] border-[#FF4500]"
                      : "bg-[#FEFEFE] border-[#6D6D6D]"
                  }`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div
                    className={`w-1 h-10 rounded-full my-auto flex-shrink-0 ${
                      activeNotification?.id === notification.id
                        ? "bg-white"
                        : "bg-[#FF4500]"
                    }`}
                  ></div>
                  <div className="min-w-0">
                    {" "}
                    {/* Added min-w-0 to fix flexbox overflow issues */}
                    <h3
                      className={`text-sm font-semibold mb-1 truncate ${
                        activeNotification?.id === notification.id
                          ? "text-white"
                          : "text-[#161616]"
                      }`}
                    >
                      {notification.title}
                    </h3>
                    <p
                      className={`text-sm text-gray-600 ${
                        activeNotification?.id === notification.id
                          ? "text-white"
                          : ""
                      } truncate`}
                    >
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Feedback Section */}
            <div className="mt-8 flex items-start gap-4 p-4 bg-white rounded-lg lg:mt-16">
              <div className="flex-shrink-0">
                <Image
                  src="/images/cubic.jpg"
                  alt="Ask us anything"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <button className="bg-[#E7D2FF] text-[#5E2B97] px-3 py-1 rounded-full text-sm hover:bg-purple-600 hover:text-white mb-2 w-full sm:w-auto">
                  Ask us anything
                </button>
                <textarea
                  placeholder="Share your feedback here"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                  rows={3}
                ></textarea>
              </div>
            </div>
          </section>

          {/* Main Content Display */}
          <main className="col-span-2 lg:mt-8 lg:pl-20">
            {activeNotification?.content ? (
              <div className="space-y-6">
                {/* Notification Header */}
                <div className="w-full max-w-6xl px-4 mx-auto">
                  <h3 className="text-sm lg:text-base font-semibold text-[#161616] mb-1">
                    {activeNotification.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-600">
                    {activeNotification.description}
                  </p>
                </div>

                {/* Property Card */}
                <div className="w-full max-w-6xl px-4 mx-auto">
                  <div className="bg-gray-300 shadow-md rounded-2xl overflow-hidden border border-gray-200">
                    {/* Image Section */}
                    <div className="relative">
                      <Image
                        src="/images/feature2.jpg"
                        alt={activeNotification.content.propertyTitle}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover filter grayscale"
                      />
                      <HeartIcon className="absolute top-4 right-4 text-2xl w-6 text-[#FFEDE6] hover:text-[#FF4500] transition cursor-pointer" />
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                      {/* Price and Badge */}
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-lg text-gray-800 truncate">
                          {activeNotification.content.price}
                        </p>
                        <div className="flex items-center gap-1">
                          {activeNotification.content.type === "Buy" ? (
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
                        {activeNotification.content.propertyTitle}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 truncate">
                        {activeNotification.content.location}
                      </p>

                      {/* Features */}
                      <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                        <span className="flex items-center space-x-1">
                          <FaBed className="text-gray-400" />
                          <span>{activeNotification.content.bedrooms} Bed</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <FaBath className="text-gray-400" />
                          <span>
                            {activeNotification.content.bathrooms} Bath
                          </span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MdSquareFoot className="text-gray-400" />
                          <span>{activeNotification.content.size}</span>
                        </span>
                      </div>

                      {/* Button */}
                      <Link
                        href={`/dashboard/listing/${activeNotification.id}`}
                        className="w-full h-[36px] px-[24px] py-[10px] bg-gray-300 text-[#000000] border border-[#000000] rounded-[32px] font-medium text-[12px] leading-[24px] font-inter flex items-center justify-center gap-[10px] hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] active:bg-[#FF8A65] transition duration-300"
                      >
                        View Details &gt;
                      </Link>
                    </div>
                  </div>

                  {/* Show similar properties button */}
                  <button className="mt-4 text-xs text-[#0B655B] font-bold border bg-[#EBFFFD] border-[#43C6B8] px-4 py-2 rounded-full hover:bg-[#00A884] hover:text-white">
                    Show me similar properties
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-6xl px-4 mx-auto">
                <h3 className="text-sm lg:text-base font-semibold text-[#161616] mb-1">
                  {activeNotification?.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600">
                  {activeNotification?.description}
                </p>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-600">
                    No additional content available for this notification
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
