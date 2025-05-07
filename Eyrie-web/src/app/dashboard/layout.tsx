import DashboardNavbar from "@/components/DashboardNavbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#F2F2F2]">
      <DashboardNavbar />
      <main>
        {children}
      </main>
    </div>
  );
}