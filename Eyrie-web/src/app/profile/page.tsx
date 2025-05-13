"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BellIcon,
  GlobeAltIcon,
  BookmarkIcon,
  KeyIcon,
  TrashIcon,
  UserCircleIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  MapPinIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Profile() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();

  const handleSearch = () => {
    console.log("Search query:", query);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header */}
      <header className="bg-[#F2F2F2] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            
            {/* Top Row: Logo + Profile */}
            <div className="flex justify-between items-center w-full sm:w-auto">
              <Image src="/images/logo.jpg" alt="Eyrie Logo" width={75} height={35} />
              
              {/* Mobile menu toggle */}
              <button 
                className="sm:hidden text-gray-700 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? 
                  <XMarkIcon className="h-6 w-6" /> : 
                  <Bars3Icon className="h-6 w-6" />
                }
              </button>
            </div>

            {/* Header Container - Responsive */}
            <div className={`flex flex-col sm:flex-row items-center justify-between w-full bg-[#FEFEFE] rounded-xl lg:rounded-full p-2 sm:p-3 gap-3 shadow-sm ${mobileMenuOpen ? 'block' : 'hidden sm:flex'}`}> 
              {/* Search Bar */}
              <div className="flex items-center border border-[#161616] rounded-full px-2 py-1 sm:px-3 sm:py-2 w-full">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  onClick={handleSearch}
                  className="text-[#161616] bg-white rounded-full p-1 sm:p-2 hover:bg-[#FF4500] hover:text-white transition"
                >
                  <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button className="text-[#161616] bg-white rounded-full p-1 sm:p-2 hover:bg-[#FF4500] hover:text-white transition">
                  <MicrophoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Bottom Row (compact controls) */}
              <div className="flex flex-wrap items-center gap-2 justify-between w-full">
                
                {/* Location Selector */}
                <div className="flex items-center border border-[#161616] rounded-full px-2 py-1 sm:px-3">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="outline-none bg-transparent text-xs sm:text-sm text-gray-700"
                  >
                    <option value="">Select location</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="port-harcourt">Port Harcourt</option>
                    <option value="ibadan">Ibadan</option>
                    <option value="enugu">Enugu</option>
                  </select>
                </div>

                {/* Language */}
                <div className="flex items-center cursor-pointer bg-white rounded-full p-1 sm:p-2 shadow hover:bg-[#FF4500] hover:text-white transition">
                  <GlobeAltIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 mr-1" />
                  <span className="text-xs sm:text-sm">en</span>
                </div>

                {/* Notification */}
                <div className="flex items-center cursor-pointer bg-white rounded-full p-1 sm:p-2 shadow hover:bg-[#FF4500] hover:text-white transition">
                  <BellIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  <span className="hidden sm:block text-xs sm:text-sm ml-1">Notification</span>
                </div>

                {/* Profile */}
                <div className="hidden sm:block cursor-pointer">
                  <Image
                    src="/images/testimony1.jpg"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-8">
        {/* Mobile Profile Nav - Horizontal Scrollable Menu */}
        <div className="lg:hidden w-full overflow-x-auto pb-2 mb-4">
          <div className="flex space-x-3 min-w-max px-2">
            <Link href="/edit-profile" className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${pathname === "/edit-profile" ? "bg-[#FF4500] text-white" : "bg-white text-gray-600"}`}>
              <UserCircleIcon className="h-4 w-4" />
              <span>Edit Profile</span>
            </Link>
            <Link href="/notifications" className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${pathname === "/notifications" ? "bg-[#FF4500] text-white" : "bg-white text-gray-600"}`}>
              <BellIcon className="h-4 w-4" />
              <span>Notifications</span>
            </Link>
            <Link href="/bank-details" className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${pathname === "/bank-details" ? "bg-[#FF4500] text-white" : "bg-white text-gray-600"}`}>
              <BookmarkIcon className="h-4 w-4" />
              <span>Bank Details</span>
            </Link>
            <Link href="/security" className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${pathname === "/security" ? "bg-[#FF4500] text-white" : "bg-white text-gray-600"}`}>
              <KeyIcon className="h-4 w-4" />
              <span>Security</span>
            </Link>
            <Link href="/languages" className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${pathname === "/languages" ? "bg-[#FF4500] text-white" : "bg-white text-gray-600"}`}>
              <GlobeAltIcon className="h-4 w-4" />
              <span>Languages</span>
            </Link>
          </div>
        </div>
        
        {/* Sidebar - Desktop only */}
        <aside className="hidden lg:block lg:col-span-1 bg-white shadow-xl rounded-3xl p-6 flex-col justify-between max-h-[450px]">
          <nav className="space-y-4 mt-2 text-base">
            <Link
              href="/edit-profile"
              className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
                pathname === "/edit-profile" ? "bg-[#FF4500] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <UserCircleIcon className="h-5 w-5" />
              <span className="sidebar-text">Edit Profile</span>
            </Link>
            <Link
              href="/notifications"
              className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
                pathname === "/notifications" ? "bg-[#FF4500] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <BellIcon className="h-5 w-5" />
              <span className="sidebar-text">Notifications</span>
            </Link>
            <Link
              href="/bank-details"
              className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
                pathname === "/bank-details" ? "bg-[#FF4500] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <BookmarkIcon className="h-5 w-5" />
              <span className="sidebar-text">Bank Details</span>
            </Link>
            <Link
              href="/security"
              className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
                pathname === "/security" ? "bg-[#FF4500] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <KeyIcon className="h-5 w-5" />
              <span className="sidebar-text">Security</span>
            </Link>
            <Link
              href="/languages"
              className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
                pathname === "/languages" ? "bg-[#FF4500] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <GlobeAltIcon className="h-5 w-5" />
              <span className="sidebar-text">Languages</span>
            </Link>
          </nav>

          <Link
            href="/delete-account"
            className="mt-8 flex items-center justify-start gap-2 text-[#D92028] hover:text-red-800 transition w-full text-left"
          >
            <TrashIcon className="h-5 w-5" />
            <span className="sidebar-text text-sm">Delete Account</span>
          </Link>
        </aside>

        {/* Profile Details */}
        <main className="col-span-1 lg:col-span-4 bg-white shadow-md rounded-[32px] p-4 sm:p-6 md:p-8">
          <h1 className="lg:text-xl text-base text-[#161616] font-bold mb-2 sm:mb-4">
            Welcome, <span className="text-[#555]">Sarah</span>
          </h1>
          <h2 className="text-[#161616] font-bold mb-4 sm:mb-6 text-xl lg:text-3xl">Edit Profile</h2>

          <section className="mb-6 sm:mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-8">
              {/* Profile Image */}
              <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]">
                <Image
                  src="/images/testimony1.jpg"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
                <PencilSquareIcon className="absolute bottom-0 right-0 h-6 w-6 sm:h-7 sm:w-7 text-gray-600 bg-white rounded-full p-1 shadow cursor-pointer" />
              </div>

              {/* Text Block: Title, Button, and Info */}
              <div className="flex flex-col justify-center w-full">
                {/* Heading and Edit Button */}
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-[#161616]">Personal Info</h3>
                  <button className="flex items-center gap-1 text-[#161616] font-medium border border-[#555] px-2 py-1 sm:px-3 sm:py-1 rounded-full hover:bg-gray-100 text-xs sm:text-sm">
                    <PencilSquareIcon className="h-3 w-3 sm:h-4 sm:w-5 text-[#161616]" />
                    Edit
                  </button>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-x-12">
                  <div className="mb-1 sm:mb-0">
                    <p className="text-xs sm:text-sm font-medium text-[#555]">Full Name</p>
                    <p className="font-medium text-xs sm:text-sm text-[#161616] truncate">Sarah Young</p>
                  </div>
                  <div className="mb-1 sm:mb-0">
                    <p className="text-xs sm:text-sm font-medium text-[#555]">Email</p>
                    <p className="font-medium text-xs sm:text-sm text-[#161616] truncate">sarahyoung@email.com</p>
                  </div>
                  <div className="mb-1 sm:mb-0">
                    <p className="text-xs sm:text-sm font-medium text-[#555]">Phone</p>
                    <p className="font-medium text-xs sm:text-sm text-[#161616] truncate">+234801 111 1111</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6 sm:mb-10">
            {/* Row 1: Label and Cancel */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm sm:text-base font-semibold text-[#161616]">Location</h3>
              <button className="text-xs sm:text-sm text-[#555] hover:underline">Cancel</button>
            </div>

            {/* Row 2: Displayed Location with Border and Save Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
              <div className="relative w-full sm:max-w-md">
                <div className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl text-[#555] flex items-center">
                  <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3" />
                  <span className="ml-2 text-xs sm:text-sm">Lagos</span>
                </div>
              </div>
              <button className="w-full sm:w-auto sm:ml-4 text-xs bg-[#FF4500] text-white px-4 py-2 rounded-full hover:bg-orange-600">
                Save Changes
              </button>
            </div>
          </section>

          {/* Bio */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm sm:text-base font-semibold text-[#161616]">Bio</h3>
              <button className="flex items-center gap-1 text-[#161616] font-medium border border-[#555] px-2 py-1 sm:px-3 sm:py-1 rounded-full hover:bg-gray-100 text-xs sm:text-sm">
                <PencilSquareIcon className="h-3 w-3 sm:h-4 sm:w-5 text-[#161616]" />
                Edit
              </button>
            </div>

            <div className="border border-gray-300 rounded-xl p-3 sm:p-4 bg-gray-50 text-xs sm:text-sm text-gray-800 leading-relaxed h-40 sm:h-60 overflow-y-auto">
              As a passionate real estate enthusiast based in Lagos, I specialize in connecting buyers and sellers with their dream properties. With over five years of experience in the real estate market, I have a deep understanding of local neighborhoods and market trends, allowing me to provide valuable insights to my clients.<br /><br />
              <strong>What I Offer:</strong><br />
              • Buyer Representation: Helping first-time buyers navigate the complexities of the real estate market with ease.<br />
              • Seller Services: Assisting homeowners in effectively marketing and selling their properties.<br />
              • Property Management: Offering management services to ensure your investment is well taken care of.<br />
              • Guided Tours: Personalized property tours to showcase the best listings that fit your needs.<br /><br />
              <strong>Why Choose Me?</strong><br />
              I pride myself on my integrity, dedication, and the personalized approach I bring to each transaction.
            </div>
          </section>
        </main>

        {/* Profile Completion - Responsive */}
        <aside className="col-span-1 lg:col-span-1 bg-white shadow-md rounded-2xl p-4 sm:p-6 max-h-[400px]">
          <h3 className="text-sm sm:text-sm font-semibold text-[#161616] mb-4">Complete your Profile</h3>

          {/* Circular Progress */}
          <div className="flex justify-center mb-4">
            <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 36 36">
              <path
                className="text-[#E7D2FF]"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              {/* Adjust strokeDasharray to match percentage */}
              <path
                className="text-[#5E2B97]"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="75, 100"
              />
            </svg>
          </div>

          {/* Checklist */}
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Account Setup
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Photo Upload
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Personal Info
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✘</span> Location
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✘</span> Bio
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✘</span> Notifications
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Bank Details
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}