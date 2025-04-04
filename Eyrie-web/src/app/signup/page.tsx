"use client"; // This is a client component
import { useState } from "react";
import Image from "next/image";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your signup logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section: Signup Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-6 md:px-12 relative">
        {/* Logo */}
        <div className="absolute top-8 left-8 mb-12">
          <Image
            src="/eyrie-logo.jpg"
            alt="Eyrie Logo"
            width={80}
            height={30}
            className="object-contain"
            priority
          />
        </div>

        <div className="w-full max-w-sm mt-24 mb-8">
          <h1 className="text-3xl font-bold mb-8">Get Started Now</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                aria-label="Enter your name"
                className="mt-1 block w-full px-4 py-1.5 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                aria-label="Enter your email"
                className="mt-1 block w-full px-4 py-1.5 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
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
                aria-label="Enter your password"
                className="mt-1 block w-full px-4 py-1.5 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                required
                aria-label="Agree to terms and policy"
                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="terms" className="text-sm text-black">
                I agree to the <a href="#" className="text-blue-800 hover:underline">terms & policy</a>
              </label>
            </div>
            <button
              type="submit"
              aria-label="Sign up for an account"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Signup
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex items-center justify-between">
            <button className="flex items-center justify-center w-full bg-gray-100 text-black text-xs py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
              <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center w-full bg-gray-100 text-black text-xs py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 ml-4">
              <Image src="/apple-icon.svg" alt="Apple" width={20} height={20} className="mr-2" />
              Sign in with Apple
            </button>
          </div>

          <p className="text-sm text-center text-black mt-4">
            Have an account? <a href="/login" className="text-blue-800 hover:underline font-bold">Sign In</a>
          </p>
        </div>
      </div>

      {/* Right Section: Background Image */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/property1.jpg"
          alt="Property"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="object-cover"
          priority // Preloads the image for better performance
        />
      </div>
    </div>
  );
}