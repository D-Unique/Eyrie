"use client";
import Dashboard from "@/components/Dashboard";
import DashboardNavbar from "@/components/DashboardNavbar";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F2F2F2]">
      <DashboardNavbar />
      <Dashboard />
    </div>
  );
}
