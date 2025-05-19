"use client";
import Navbar from "@/components/LandingPageNavbar";
import HeroSection from "@/components/HeroSection";
import FeaturedListings from "@/components/FeaturedListings";
import WhatYouGet from "@/components/WhatYouGet";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import DownloadAppBanner from "@/components/DownloadAppBanner";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F2F2F2]">
      <Navbar />
      <HeroSection />
      <FeaturedListings />
      <WhatYouGet />
      <Testimonials />
      <Cta />
      {/* Display between CTA and Footer */}
      <div className="relative z-10 px-8 sm:px-8 -mt-8 sm:-mt-8 -mb-6 sm:-mb-8">
        <DownloadAppBanner />
      </div>
      <Footer />
    </div>
  );
}
