"use client"; // This is a client component
import { useState } from "react";
import Image from "next/image";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // API call
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/Login.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Login Form */}
      <div className="absolute inset-0 flex items-center justify-center p-4 z-10 overflow-y-auto">
        <div className="bg-white w-full max-w-sm p-4 sm:p-6 rounded-[24px] border border-[#B53100] flex flex-col gap-4 max-h-screen overflow-y-auto">
          <h1 className="text-2xl sm:text-2xl font-bold text-center text-[#161616]">
            Welcome Back!
          </h1>
          <p className="text-sm text-[#555] text-center">
            You can login using any of the existing methods
          </p>

          {/* Social Login Buttons */}
          <button className="flex items-center justify-center w-full bg-gray-100 text-black text-sm py-2 px-4 rounded-xl hover:bg-[#B6B6B6] transition duration-300">
            <Image
              src="/images/google-icon.svg" alt="Google" width={20} height={20} className="mr-2"
            />
          </button>

          <p className="text-center text-sm text-[#919191]">
            Don’t have an account?{" "}
            <a href="/signup" className="text-[#FF4500] hover:underline">
              Sign up
            </a>
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <button
              type="submit"
              className="w-full h-[50px] px-[24px] py-[16px] bg-[#FF4500] text-[#FFEDE6] border border-[#000000] rounded-[32px] font-medium text-[16px] leading-[24px] font-inter flex items-center justify-center gap-[10px] hover:bg-[#FF5722] active:bg-[#FF8A65] transition duration-300"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}