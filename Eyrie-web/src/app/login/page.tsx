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
    // Add your login logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section: Login Form */}
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
          <h1 className="text-3xl font-bold mb-3">Welcome back!</h1>
          <p className="text-base text-black mb-8">
            Enter your Credentials to enter your account
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-black">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-800 hover:underline font-bold">
                  Forgot password?
                </a>
              </div>
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
                id="remember"
                required
                aria-label="Remember me"
                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-black">
                Remember for 30 days
              </label>
            </div>
            <button
              type="submit"
              aria-label="Log in to your account"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Login
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
            Don&#39;t have an account?{" "}
            <a href="/signup" className="text-blue-800 hover:underline font-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Right Section: Background Image */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/property2.jpg"
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