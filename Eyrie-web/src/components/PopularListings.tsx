import { FaHeart, FaBed, FaBath } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

const listings = [
  {
    id: 1,
    title: "Luxurious Bungalow",
    location: "Lagos, Nigeria",
    price: "₦70,000,000",
    type: "Buy",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,500 Sqft",
    image: "/images/bungalow.png",
  },
  {
    id: 2,
    title: "Luxurious Duplex",
    location: "Lagos, Nigeria",
    price: "₦70,000,000",
    type: "Rent",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,500 Sqft",
    image: "/images/duplex2.jpg",
  },
  {
    id: 3,
    title: "Luxurious Semi detachable Duplex",
    location: "Lagos, Nigeria",
    price: "₦70,000,000",
    type: "Rent",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,500 Sqft",
    image: "/images/duplex.jpg",
  },
];

export default function PopularListings() {
  return (
    <section className="py-10">
      <h2 className="text-xl font-bold mb-6 px-4 lg:px-0">Popular Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative"
          >
            {/* Wishlist Icon */}
            <FaHeart className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer text-xl z-10" />

            {/* Image */}
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-2">
              {/* Price & Type */}
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg text-gray-800">{listing.price}</p>
                <div className="flex items-center gap-1">
                  <FaCircle
                    className={`text-sm ${
                      listing.type === "Buy" ? "text-yellow-500" : "text-green-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold ${
                      listing.type === "Buy" ? "text-yellow-600" : "text-green-600"
                    }`}
                  >
                    {listing.type}
                  </span>
                </div>
              </div>

              {/* Title & Location */}
              <h3 className="text-gray-700 font-semibold text-base">
                {listing.title}
              </h3>
              <p className="text-sm text-gray-500">{listing.location}</p>

              {/* Features */}
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span className="flex items-center gap-1">
                  <FaBed />
                  {listing.bedrooms} Bed
                </span>
                <span className="flex items-center gap-1">
                  <FaBath />
                  {listing.bathrooms} Bath
                </span>
                <span className="flex items-center gap-1">
                  <MdSquareFoot />
                  {listing.size}
                </span>
              </div>

              {/* View Button */}
              <button className="mt-4 w-full text-sm py-2 border border-black rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                View Details &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
