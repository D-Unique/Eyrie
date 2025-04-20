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
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="hidden sm:block">
        <Image
          src="/login.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Login Form */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white p-8 rounded-3xl max-w-sm w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome Back!</h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            You can login using any of the existing methods
          </p>

          {/* Social Login Buttons */}
          <button className="flex items-center justify-center w-full bg-gray-100 text-black text-sm py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300 mb-4">
            <Image
              src="/google-icon.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
          </button>

          <p className="text-center text-sm text-gray-500 mb-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-orange-500 hover:underline">
              Sign up
            </a>
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
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
                className="mt-1 block w-full px-4 py-2 font-bold border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
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
                className="mt-1 block w-full font-bold px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}