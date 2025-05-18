"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BellIcon,
  GlobeAltIcon,
  BookmarkIcon,
  KeyIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile/Tablet Profile Nav - Horizontal Scrollable Menu */}
      <div
        className="lg:hidden sticky top-11 z-10 bg-[#FEFEFE] w-full overflow-x-auto pb-2 mb-1 shadow-sm 
        [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-[#FF4500] [&::-webkit-scrollbar-thumb]:rounded-full
        scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-[#FF4500] scrollbar-rounded-full
        md:[&::-webkit-scrollbar]:h-2 md:pb-3"
      >
        <div className="flex space-x-3 min-w-max px-4 py-2">
          {/* Link components */}
          <Link
            href="/profile"
            className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${
              pathname === "/profile"
                ? "bg-[#FF4500] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            <UserCircleIcon className="h-4 w-4" />
            <span>Edit Profile</span>
          </Link>
          <Link
            href={"/profile/notifications"}
            className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${
              pathname === "/profile/notifications"
                ? "bg-[#FF4500] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            <BellIcon className="h-4 w-4" />
            <span>Notifications</span>
          </Link>
          <Link
            href="/profile/dashboard"
            className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${
              pathname === "/profile/dashboard"
                ? "bg-[#FF4500] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            <BookmarkIcon className="h-4 w-4" />
            <span>Seller's Dashboard</span>
          </Link>
          <Link
            href="/security"
            className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${
              pathname === "/security"
                ? "bg-[#FF4500] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            <KeyIcon className="h-4 w-4" />
            <span>Security</span>
          </Link>
          <Link
            href="/languages"
            className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${
              pathname === "/languages"
                ? "bg-[#FF4500] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            <GlobeAltIcon className="h-4 w-4" />
            <span>Languages</span>
          </Link>
          <Link
            href="/delete-account"
            className={`whitespace-nowrap flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${
              pathname === "/delete-account"
                ? "bg-[#FF4500] text-[#D92028]"
                : "bg-white text-[#D92028]"
            }`}
          >
            <TrashIcon className="h-4 w-4" />
            <span>Delete Account</span>
          </Link>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:col-span-1 bg-white shadow-xl rounded-3xl p-6 flex-col justify-between max-h-[450px] sticky top-[8.5rem]">
        {/* Desktop Sidebar Content */}
        <nav className="space-y-4 mt-2 text-base">
          <Link
            href="/profile"
            className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
              pathname === "/profile"
                ? "bg-[#FF4500] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <UserCircleIcon className="h-5 w-5" />
            <span className="sidebar-text text-xs font-bold">Edit Profile</span>
          </Link>
          <Link
            href={"/profile/notifications"}
            className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
              pathname === "/profile/notifications"
                ? "bg-[#FF4500] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <BellIcon className="h-5 w-5" />
            <span className="sidebar-text text-xs font-bold">
              Notifications
            </span>
          </Link>
          <Link
            href="/profile/dashboard"
            className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
              pathname === "/profile/dashboard"
                ? "bg-[#FF4500] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <BookmarkIcon className="h-5 w-5" />
            <span className="sidebar-text text-xs font-bold">
              Seller's Dashboard
            </span>
          </Link>
          <Link
            href="/security"
            className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
              pathname === "/security"
                ? "bg-[#FF4500] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <KeyIcon className="h-5 w-5" />
            <span className="sidebar-text text-xs font-bold">Security</span>
          </Link>
          <Link
            href="/languages"
            className={`flex items-center justify-start gap-2 py-2 rounded-full font-semibold w-full text-left ${
              pathname === "/languages"
                ? "bg-[#FF4500] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <GlobeAltIcon className="h-5 w-5" />
            <span className="sidebar-text text-xs font-bold">Languages</span>
          </Link>
        </nav>

        <Link
          href="/delete-account"
          className="mt-8 flex items-center justify-start gap-2 text-[#D92028] hover:text-red-800 transition w-full text-left"
        >
          <TrashIcon className="h-5 w-5" />
          <span className="sidebar-text text-xs font-bold">Delete Account</span>
        </Link>
      </aside>
    </>
  );
}
