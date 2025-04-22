"use client"; // This is a client component
import { useState } from "react";
import Image from "next/image";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // API call
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section: Image and Text */}
      <div className="hidden md:flex w-1/2 h-screen relative bg-white p-8">
        {/* Property Image */}
        <div className="w-full flex justify-center items-center">
          <Image
            src="/property1.jpg"
            alt="Modern two-story house with a garage and garden"
            className="object-contain rounded-lg max-h-full max-w-full"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>

      {/* Right Section: Signup Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-6 md:px-12">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl sm:text-2xl font-bold text-center text-[#161616] mb-4">Create your Account</h1>

          {/* Sign up with Google */}
          <button className="flex mb-4 items-center justify-center w-full bg-gray-100 text-black text-sm py-2 px-4 rounded-xl hover:bg-[#B6B6B6] transition duration-300">
            <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
            Sign up with Google
          </button>

          {/* Already have an account */}
          <p className="text-center text-sm text-[#919191]">
            Already have an account?{" "}
            <a href="/login" className="text-[#FF4500] hover:underline">
              Sign in
            </a>
          </p>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#161616]">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 bg-[#FBFBFB] border border-[B6B6B6] rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#161616]">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 bg-[#FBFBFB] border border-[B6B6B6] rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-[#161616]">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 bg-[#FBFBFB] border border-[B6B6B6] rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-[#161616]">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
                className="mt-1 block w-full px-4 py-2 bg-[#FBFBFB] border border-[B6B6B6] rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full h-[50px] px-[24px] py-[16px] bg-[#FF4500] text-[#FFEDE6] border border-[#000000] rounded-[32px] font-medium text-[16px] leading-[24px] font-inter flex items-center justify-center gap-[10px] hover:bg-[#FF5722] active:bg-[#FF8A65] transition duration-300"
            >
              Check property Listings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}