import Image from "next/image";

export default function WhatYouGet() {
  return (
    <>
      {/* Section Heading */}
      <div className="px-4 max-w-6xl mx-auto mb-8">
        <h3 className="text-xl font-bold">What You Get with Eyrie</h3>
      </div>

      {/* What You Get Section */}
      <div className="bg-[#FFF5F2] py-12 max-w-6xl mx-auto px-4 md:px-12 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-start text-left">
            <Image
              src="/images/building.jpg"
              alt="Personalized matches"
              width={80}
              height={80}
              className="mb-4"
            />
            <h4 className="font-semibold text-base mb-2">Personalized matches</h4>
            <p className="text-sm text-gray-600">
              Tell us what you're looking for, and we'll show you homes that fit your lifestyle perfectly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start text-left">
            <Image
              src="/images/clock.jpg"
              alt="Schedule visits online"
              width={80}
              height={80}
              className="mb-4"
            />
            <h4 className="font-semibold text-base mb-2">Schedule visits online</h4>
            <p className="text-sm text-gray-600">
              Book property viewings instantly — no phone calls, no hassle.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start text-left">
            <Image
              src="/images/save.jpg"
              alt="Save favorite properties"
              width={80}
              height={80}
              className="mb-4"
            />
            <h4 className="font-semibold text-base mb-2">Save favorite properties</h4>
            <p className="text-sm text-gray-600">
              Like what you see? Save listings to revisit anytime and compare easily.
            </p>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className="bg-[#E83F00] py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-y-6 md:gap-y-0 md:gap-x-10">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/key.jpg"
              alt="Your dream home"
              width={400}
              height={300}
              className="rounded-lg object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-3 text-[#FFFFFF]">Your dream home could be just a click away</h3>
            <p className="mb-3 text-sm md:text-base text-[#FFFFFF]">
              Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-[#FFFFFF]">
              <li>Showcase and embed your work with</li>
              <li>Publish across social channels in a click</li>
              <li>Sell your videos worldwide</li>
              <li>Embed your work with</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
