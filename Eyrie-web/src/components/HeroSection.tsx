import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] bg-[#F2F2F2] flex flex-col items-center justify-center text-center px-4">
      {/* Text Content */}
      <div className="z-10">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mt-4 mb-8 text-[#555]">
          Your Next Home is <br />
          One Click Away with <br />
          <span className="text-[#161616] font-black text-3xl sm:text-4xl md:text-5xl mt-6 block">
            Eyrie
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-6 text-[#555]">
          Explore handpicked listings across top neighborhoods
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full max-w-6xl px-4">
        <Image
          src="/images/hero.jpg"
          alt="Hero House"
          width={1200}
          height={800}
          className="rounded-3xl object-cover"
        />
        {/* Button */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block">
          <button className="bg-[#FF4500] text-[#FFEDE6] px-12 py-3 text-base rounded-[32px] hover:bg-[#FF5722] transition duration-300">
            Check property Listings
          </button>
        </div>
      </div>
    </div>
  );
}
