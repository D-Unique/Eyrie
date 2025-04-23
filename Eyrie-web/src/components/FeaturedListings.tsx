import { FaHeart } from "react-icons/fa";
import { FaBed, FaBath } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

export default function FeaturedListings() {
  const listings = [
    {
      id: 1,
      title: "Luxurious Bungalow",
      location: "Lagos, Nigeria",
      price: "₦70,000,000",
      type: "Rent",
      bedrooms: 3,
      bathrooms: 2,
      size: "1,500 Sqft",
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Abuja, Nigeria",
      price: "₦50,000,000",
      type: "Buy",
      bedrooms: 2,
      bathrooms: 1,
      size: "1,200 Sqft",
    },
    {
      id: 3,
      title: "Semi-Detached Duplex",
      location: "Port Harcourt, Nigeria",
      price: "₦85,000,000",
      type: "Rent",
      bedrooms: 4,
      bathrooms: 3,
      size: "2,000 Sqft",
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      location: "Lekki, Nigeria",
      price: "₦120,000,000",
      type: "Buy",
      bedrooms: 5,
      bathrooms: 4,
      size: "3,000 Sqft",
    },
    {
      id: 5,
      title: "Cozy Studio Apartment",
      location: "Ikeja, Nigeria",
      price: "₦25,000,000",
      type: "Rent",
      bedrooms: 1,
      bathrooms: 1,
      size: "800 Sqft",
    },
    {
      id: 6,
      title: "Modern Duplex",
      location: "Victoria Island, Nigeria",
      price: "₦95,000,000",
      type: "Buy",
      bedrooms: 4,
      bathrooms: 3,
      size: "2,500 Sqft",
    },
  ];

  return (
    <div className="py-12 bg-[#F2F2F2]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 max-w-6xl mx-auto mb-8">
        <h2 className="text-xl font-bold">Featured Listings</h2>
      </div>
      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4 mx-auto">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200"
          >
            {/* Card Header with Image */}
            <div className="relative">
              <img
                src="/images/signup.jpg" // Placeholder image
                alt={listing.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <FaHeart className="absolute top-4 right-4 text-2xl text-[#FFEDE6] border:text-[#FF4500] hover:text-[#FF4500] transition cursor-pointer" />
            </div>
            {/* Content */}
            <div className="p-4">
              {/* Price and Badge */}
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-800 font-bold text-lg">{listing.price}</p>
                <div className="flex items-center space-x-1">
                  <FaCircle
                    className={`${
                      listing.type === "Buy" ? "text-yellow-500" : "text-green-500"
                    } text-lg`}
                  />
                  <span
                    className={`${
                      listing.type === "Buy" ? "text-orange-500" : "text-green-500"
                    } text-xs font-medium`}
                  >
                    {listing.type}
                  </span>
                </div>
              </div>
              {/* Title and Location */}
              <h3 className="text-gray-700 font-semibold text-base mb-1">
                {listing.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{listing.location}</p>
              {/* Features */}
              <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                <span className="flex items-center space-x-1">
                  <FaBed className="text-gray-400" />
                  <span>{listing.bedrooms} Bed</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaBath className="text-gray-400" />
                  <span>{listing.bathrooms} Bath</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MdSquareFoot className="text-gray-400" />
                  <span>{listing.size}</span>
                </span>
              </div>
                {/* Button */}
                <button className="w-full h-[36px] px-[24px] py-[10px] bg-[#FBFBFB] text-[#000000] border border-[#000000] rounded-[32px] font-medium text-[12px] leading-[24px] font-inter flex items-center justify-center gap-[10px] hover:bg-[#FF5722] active:bg-[#FF8A65] transition duration-300">
                  View Details &gt;
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}