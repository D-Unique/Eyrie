"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface FlashSalesTimerProps {
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
}

const FlashSalesTimer: React.FC<FlashSalesTimerProps> = ({ 
  initialHours = 3, 
  initialMinutes = 12, 
  initialSeconds = 24 
}) => {
  const [hours, setHours] = useState<number>(initialHours);
  const [minutes, setMinutes] = useState<number>(initialMinutes);
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  return (
    <div className="bg-yellow-100 p-3 rounded-lg flex items-center justify-between mb-6">
      <div className="font-medium text-yellow-800">Flash Sales/ Rentals</div>
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <span className="font-bold">{hours.toString().padStart(2, '0')}</span>
          <span className="mx-1">:</span>
          <span className="font-bold">{minutes.toString().padStart(2, '0')}</span>
          <span className="mx-1">:</span>
          <span className="font-bold">{seconds.toString().padStart(2, '0')}</span>
        </div>
        <Link href="/flash-sales" className="text-sm text-blue-600 hover:underline">
          See All
        </Link>
      </div>
    </div>
  );
};

export default FlashSalesTimer;