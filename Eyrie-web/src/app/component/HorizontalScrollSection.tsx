import React from "react";
import HouseCard from "./HouseCard";

function HorizontalScrollSection() {
  return (
    <div className="overflow-x-auto w-full h-96 bg-gray-200">
      <HouseCard />
      <HouseCard />
    </div>
  );
}

export default HorizontalScrollSection;
