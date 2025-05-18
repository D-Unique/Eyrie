"use client";

import { useState, useCallback } from "react";
import Header from "@/components/ProfileHeader";
import Sidebar from "@/components/ProfileSidebar";
import {
  EyeIcon,
  TrashIcon,
  EyeSlashIcon,
  PencilSquareIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BuyBadgeIcon, RentBadgeIcon } from "@/components/Icon";
import Chart from "@/components/Chart";

type TabType = "Active" | "Pending" | "Concluded";
type PropertyCondition = "Buy" | "Rent";
type PropertyStatus = "Active" | "Pending" | "Sold";

interface Transaction {
  id: string;
  propertyTitle: string;
  image: string;
  condition: PropertyCondition;
  price: number;
}

interface Property {
  id: string;
  title: string;
  image: string;
  condition: PropertyCondition;
  views: number;
  status: PropertyStatus;
}

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRevenue, setShowRevenue] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("Active");

  const tabs: TabType[] = ["Active", "Pending", "Concluded"];

  // Sample data for transactions
  const transactions: Transaction[] = [
    {
      id: "1",
      propertyTitle: "Luxurious Bungalow",
      image: "/images/feature2.jpg",
      condition: "Buy",
      price: 40000000,
    },
    {
      id: "2",
      propertyTitle: "Modern Apartment",
      image: "/images/feature2.jpg",
      condition: "Rent",
      price: 20000000,
    },
  ];

  // Sample data for properties
  const properties: Property[] = [
    {
      id: "1",
      title: "3BR Bungalow",
      image: "/images/feature2.jpg",
      condition: "Buy",
      views: 124,
      status: "Active",
    },
    {
      id: "2",
      title: "2BR Apartment",
      image: "/images/feature2.jpg",
      condition: "Rent",
      views: 71,
      status: "Pending",
    },
    {
      id: "3",
      title: "4BR Villa",
      image: "/images/feature2.jpg",
      condition: "Buy",
      views: 89,
      status: "Sold",
    },
  ];

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="bg-[#FEFEFE] min-h-screen">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
        <Sidebar />

        {/* Dashboard Details */}
        <div className="col-span-1 lg:col-span-5 space-y-6 sm:space-y-8">
          {/* Welcome Section */}
          <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-lg sm:text-lg font-bold text-[#161616] mb-2">
                Welcome, <span className="text-[#555] text-lg">Sarah</span>
              </h1>
              <h2 className="text-2xl sm:text-xl lg:text-3xl font-bold text-[#161616]">
                Account
              </h2>
            </div>
            <div className="text-sm text-gray-600 mt-2 sm:mt-0">
              <p>
                Seller Id - <span className="font-medium">12345</span>
              </p>
              <p>Sarahyoung@email.com</p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Revenue Card */}
            <div className="bg-[#FAF6FF] shadow-md rounded-2xl p-4 flex flex-col items-start border border-[#7E55AC]">
              <div className="flex justify-between items-center w-full">
                <div className="relative">
                  <select className="text-sm font-medium text-[#5E2B97] bg-[#E7D2FF] rounded-xl border-none focus:ring-0 p-1 pr-6 appearance-none">
                    <option value="sales">Revenue (Sales)</option>
                    <option value="rentals">Revenue (Rentals)</option>
                  </select>
                  <ChevronDownIcon className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
                <button
                  onClick={() => setShowRevenue(!showRevenue)}
                  className="focus:outline-none"
                >
                  {showRevenue ? (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#341853] mt-6 sm:mt-8">
                {showRevenue ? "₦80 000 000" : "••••••••••"}
              </p>
            </div>

            {/* Status Card */}
            <div className="bg-[#FEFEFE] shadow-md rounded-2xl p-4">
              <div className="relative w-full h-2 rounded-full overflow-hidden bg-gray-200 mb-4">
                <div
                  className="absolute left-0 top-0 h-full bg-[#FFB800]"
                  style={{ width: "30%" }}
                />
                <div
                  className="absolute left-[30%] top-0 h-full bg-[#5E2B97]"
                  style={{ width: "25%" }}
                />
                <div
                  className="absolute left-[55%] top-0 h-full bg-[#FF914D]"
                  style={{ width: "45%" }}
                />
              </div>
              <div className="mt-3 flex flex-col gap-2 text-sm text-[#161616] font-medium">
                {[
                  { label: "Active", color: "bg-[#FFB800]", width: "30%" },
                  { label: "Pending", color: "bg-[#5E2B97]", width: "25%" },
                  { label: "Concluded", color: "bg-[#FF914D]", width: "45%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 ${item.color}`} />
                      <p>{item.label}</p>
                    </div>
                    <p>{item.width}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Details Card */}
            <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#555]">
                  Account Details
                </h3>
                <div className="flex items-center gap-2">
                  <PencilSquareIcon className="h-5 w-5 font-bold text-[#555] cursor-pointer" />
                  <DocumentDuplicateIcon className="h-5 w-5 font-bold text-[#555] cursor-pointer" />
                </div>
              </div>
              <p className="text-sm text-[#161616]">Sarah E. Young</p>
              <p className="text-sm text-[#161616]">Zenith Bank</p>
              <p className="text-sm text-[#161616]">0123456789</p>
            </div>
          </section>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="w-full lg:w-2/5 space-y-6">
              {/* Transactions Section */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-bold text-[#161616]">
                    Transactions
                  </h3>
                  <div className="relative">
                    <svg
                      className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-[#14B8A6] pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6l4 2m4-2a8 8 0 11-16 0 8 8 0 0116 0z"
                      />
                    </svg>
                    <select className="text-sm bg-[#F9F9F9] border border-gray-300 rounded-xl pl-7 pr-2 py-1">
                      <option>30 Days</option>
                      <option>60 Days</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-center gap-3 sm:gap-12 mb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`text-xs sm:text-sm font-medium pb-1 px-2 sm:px-3 py-1 rounded-lg transition-colors duration-200
                        ${
                          activeTab === tab
                            ? "text-[#FF4500] border-b-2 border-[#FF4500] bg-[#FFEDE6]"
                            : "text-gray-600 border-b-2 border-transparent bg-transparent"
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div
                  className="bg-white shadow-lg rounded-2xl p-3 sm:p-4 flex flex-col"
                  style={{ maxHeight: "300px" }}
                >
                  <div className="flex justify-between items-center px-1 sm:px-2 mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-[#555]">
                    <p className="w-1/3">Property Title</p>
                    <p className="w-1/3 text-center">Condition</p>
                    <p className="w-1/3 text-right">Price</p>
                  </div>
                  <div className="overflow-y-auto min-h-0 space-y-3 sm:space-y-4 pr-1 sm:pr-2 custom-scrollbar">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between text-xs sm:text-sm"
                      >
                        <div className="flex items-center gap-1 sm:gap-2 w-1/3">
                          <img
                            src={transaction.image}
                            alt={transaction.propertyTitle}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                          />
                          <p className="text-[#161616] truncate max-w-[80px] sm:max-w-full">
                            {transaction.propertyTitle}
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-1 w-1/3">
                          {transaction.condition === "Buy" ? (
                            <BuyBadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          ) : (
                            <RentBadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          )}
                          <span className="text-[#161616]">
                            {transaction.condition}
                          </span>
                        </div>
                        <p className="w-1/3 text-right text-[#161616]">
                          ₦{transaction.price.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Chart Section */}
              <section>
                <Chart />
              </section>
            </div>

            {/* Right Column - Properties Section */}
            <div className="w-full lg:w-3/5">
              <section>
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-bold text-[#161616]">
                    Property Listings
                  </h3>
                  <div className="relative">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-[#14B8A6] pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6l4 2m4-2a8 8 0 11-16 0 8 8 0 0116 0z"
                      />
                    </svg>
                    <select className="text-xs sm:text-sm bg-[#F9F9F9] border border-gray-300 rounded-lg md:rounded-xl pl-6 sm:pl-7 pr-2 py-1">
                      <option>30 Days</option>
                      <option>60 Days</option>
                    </select>
                  </div>
                </div>

                <div
                  className="bg-white shadow-md rounded-xl md:rounded-2xl p-3 sm:p-4 overflow-hidden flex flex-col relative min-h-0
                  max-h-[400px] sm:max-h-[400px] lg:max-h-[630px]"
                >
                  <div className="overflow-x-auto custom-scrollbar">
                    <div className="min-w-[500px]">
                      {/* Header row */}
                      <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[#555] bg-white sticky top-0 z-[5] pt-1 pb-2 px-2 border-b">
                        <p>Property Title</p>
                        <p>Condition</p>
                        <p>Views</p>
                        <p>Status</p>
                        <p>Actions</p>
                      </div>
                      {/* Content rows */}
                      <div className="max-h-[330px] sm:max-h-[330px] lg:max-h-[560px] custom-scrollbar">
                        <div className="space-y-3 sm:space-y-4">
                          {properties.map((property) => (
                            <div
                              key={property.id}
                              className="grid grid-cols-5 gap-2 sm:gap-4 items-center text-xs sm:text-sm hover:bg-gray-50 p-2 rounded-lg transition-colors"
                            >
                              {/* property cells */}
                              <div className="flex items-center gap-1 sm:gap-2">
                                <img
                                  src={property.image}
                                  alt={property.title}
                                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                                />
                                <p className="text-[#161616] truncate">
                                  {property.title}
                                </p>
                              </div>
                              <div className="flex items-center gap-1 text-[#161616]">
                                {property.condition === "Buy" ? (
                                  <BuyBadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                ) : (
                                  <RentBadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                )}
                                <span>{property.condition}</span>
                              </div>
                              <p className="text-[#161616]">{property.views}</p>
                              <p className="text-[#161616]">
                                {property.status}
                              </p>
                              <div className="flex items-center gap-1 sm:gap-2">
                                <PencilSquareIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#161616] cursor-pointer hover:text-blue-600" />
                                <TrashIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#919191] cursor-pointer hover:text-red-600" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
