import Image from "next/image";

export default function Cta() {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] sm:h-[70vh] lg:h-[500px]">
      {/* Background Image */}
      <Image
        src="/images/cta.jpg"
        alt="Hero House"
        fill
        className="object-cover"
        priority
      />
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center text-[#FFFFFF] flex flex-col items-center justify-center h-full">
        <p className="text-xs sm:text-sm md:text-base mb-2">
          Check premium apartments
        </p>
        <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-6">
          You can own a home too
        </h2>
        <button className="bg-[#FF4500] text-[#FFEDE6] px-6 sm:px-10 md:px-16 py-2 sm:py-3.5 md:py-3 text-sm sm:text-base md:text-sm rounded-[32px] hover:bg-[#FF5722] transition duration-300">
          View available Properties
        </button>
      </div>
    </div>
  );
}
