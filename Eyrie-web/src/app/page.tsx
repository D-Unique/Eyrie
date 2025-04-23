"use client"; // This is a client component
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedListings from "@/components/FeaturedListings";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F2F2F2]">
      <Navbar />
      <HeroSection />
      <FeaturedListings />
      <Footer />
    </div>
  );
}
