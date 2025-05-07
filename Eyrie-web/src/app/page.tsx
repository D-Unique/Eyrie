"use client"; // This is a client component
import Navbar from "@/components/LandingPageNavbar";
import HeroSection from "@/components/HeroSection";
import FeaturedListings from "@/components/FeaturedListings";
import WhatYouGet from "@/components/WhatYouGet";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F2F2F2]">
      <Navbar />
      <HeroSection />
      <FeaturedListings />
      <WhatYouGet />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}
