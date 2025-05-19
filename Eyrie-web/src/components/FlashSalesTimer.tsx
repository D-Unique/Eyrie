"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface FlashSalesTimerProps {
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
}

const FlashSalesTimer: React.FC<FlashSalesTimerProps> = ({
  initialHours = 3,
  initialMinutes = 12,
  initialSeconds = 24,
}) => {
  const [hours, setHours] = useState<number>(initialHours);
  const [minutes, setMinutes] = useState<number>(initialMinutes);
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours((prev) => prev - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  return (
    <div className="bg-[#FFE9B0] p-3 rounded-lg flex items-center justify-between mb-6 w-full max-w-6xl px-4 mx-auto">
      {/* Left Section */}
      <div className="text-[#8C6500] font-bold lg:text-base text-xs">
        Flash Sales/ Rentals
      </div>

      {/* Center Section (Timer) */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-1 text-[#8C6500] font-bold text-sm lg:text-lg">
          <span>{hours.toString().padStart(2, "0")}</span>
          <span>:</span>
          <span>{minutes.toString().padStart(2, "0")}</span>
          <span>:</span>
          <span>{seconds.toString().padStart(2, "0")}</span>
        </div>
      </div>

      {/* Right Section (Link) */}
      <Link
        href="/flash-sales"
        className="text-[#8C6500] font-medium lg:text-sm text-xs hover:underline"
      >
        See All &gt;
      </Link>
    </div>
  );
};

export default FlashSalesTimer;
