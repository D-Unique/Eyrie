import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaBed, FaBath } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { HeartIcon } from "@heroicons/react/24/outline";

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
    image: "/images/feature1.jpg",
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

// BuyBadgeIcon.jsx
export const BuyBadgeIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.24 6.20143C14.9707 5.92 14.6921 5.63 14.5871 5.375C14.49 5.14143 14.4843 4.75429 14.4786 4.37929C14.4679 3.68214 14.4564 2.89214 13.9071 2.34286C13.3579 1.79357 12.5679 1.78214 11.8707 1.77143C11.4957 1.76571 11.1086 1.76 10.875 1.66286C10.6207 1.55786 10.33 1.27929 10.0486 1.01C9.55571 0.536429 8.99571 0 8.25 0C7.50429 0 6.945 0.536429 6.45143 1.01C6.17 1.27929 5.88 1.55786 5.625 1.66286C5.39286 1.76 5.00429 1.76571 4.62929 1.77143C3.93214 1.78214 3.14214 1.79357 2.59286 2.34286C2.04357 2.89214 2.03571 3.68214 2.02143 4.37929C2.01571 4.75429 2.01 5.14143 1.91286 5.375C1.80786 5.62929 1.52929 5.92 1.26 6.20143C0.786429 6.69429 0.25 7.25429 0.25 8C0.25 8.74571 0.786429 9.305 1.26 9.79857C1.52929 10.08 1.80786 10.37 1.91286 10.625C2.01 10.8586 2.01571 11.2457 2.02143 11.6207C2.03214 12.3179 2.04357 13.1079 2.59286 13.6571C3.14214 14.2064 3.93214 14.2179 4.62929 14.2286C5.00429 14.2343 5.39143 14.24 5.625 14.3371C5.87929 14.4421 6.17 14.7207 6.45143 14.99C6.94429 15.4636 7.50429 16 8.25 16C8.99571 16 9.555 15.4636 10.0486 14.99C10.33 14.7207 10.62 14.4421 10.875 14.3371C11.1086 14.24 11.4957 14.2343 11.8707 14.2286C12.5679 14.2179 13.3579 14.2064 13.9071 13.6571C14.4564 13.1079 14.4679 12.3179 14.4786 11.6207C14.4843 11.2457 14.49 10.8586 14.5871 10.625C14.6921 10.3707 14.9707 10.08 15.24 9.79857C15.7136 9.30571 16.25 8.74571 16.25 8C16.25 7.25429 15.7136 6.695 15.24 6.20143ZM11.5114 6.69L7.51143 10.69C7.45836 10.7431 7.39534 10.7853 7.32597 10.814C7.2566 10.8428 7.18224 10.8576 7.10714 10.8576C7.03205 10.8576 6.95769 10.8428 6.88832 10.814C6.81895 10.7853 6.75593 10.7431 6.70286 10.69L4.98857 8.97571C4.88135 8.86849 4.82111 8.72307 4.82111 8.57143C4.82111 8.41979 4.88135 8.27437 4.98857 8.16714C5.09579 8.05992 5.24122 7.99968 5.39286 7.99968C5.54449 7.99968 5.68992 8.05992 5.79714 8.16714L7.10714 9.47786L10.7029 5.88143C10.7559 5.82834 10.819 5.78622 10.8883 5.75749C10.9577 5.72876 11.0321 5.71397 11.1071 5.71397C11.1822 5.71397 11.2566 5.72876 11.3259 5.75749C11.3953 5.78622 11.4583 5.82834 11.5114 5.88143C11.5645 5.93452 11.6066 5.99755 11.6354 6.06692C11.6641 6.13628 11.6789 6.21063 11.6789 6.28571C11.6789 6.3608 11.6641 6.43514 11.6354 6.50451C11.6066 6.57388 11.5645 6.63691 11.5114 6.69Z"
      fill="#FFB800"
    />
  </svg>
);

// RentBadgeIcon.jsx
export const RentBadgeIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.8663 5.42625C13.6306 5.18 13.3869 4.92625 13.295 4.70312C13.21 4.49875 13.205 4.16 13.2 3.83187C13.1906 3.22187 13.1806 2.53062 12.7 2.05C12.2194 1.56937 11.5281 1.55937 10.9181 1.55C10.59 1.545 10.2513 1.54 10.0469 1.455C9.82438 1.36312 9.57 1.11937 9.32375 0.88375C8.8925 0.469375 8.4025 0 7.75 0C7.0975 0 6.60812 0.469375 6.17625 0.88375C5.93 1.11937 5.67625 1.36312 5.45312 1.455C5.25 1.54 4.91 1.545 4.58187 1.55C3.97187 1.55937 3.28062 1.56937 2.8 2.05C2.31937 2.53062 2.3125 3.22187 2.3 3.83187C2.295 4.16 2.29 4.49875 2.205 4.70312C2.11312 4.92562 1.86937 5.18 1.63375 5.42625C1.21937 5.8575 0.75 6.3475 0.75 7C0.75 7.6525 1.21937 8.14187 1.63375 8.57375C1.86937 8.82 2.11312 9.07375 2.205 9.29688C2.29 9.50125 2.295 9.84 2.3 10.1681C2.30937 10.7781 2.31937 11.4694 2.8 11.95C3.28062 12.4306 3.97187 12.4406 4.58187 12.45C4.91 12.455 5.24875 12.46 5.45312 12.545C5.67562 12.6369 5.93 12.8806 6.17625 13.1163C6.6075 13.5306 7.0975 14 7.75 14C8.4025 14 8.89187 13.5306 9.32375 13.1163C9.57 12.8806 9.82375 12.6369 10.0469 12.545C10.2513 12.46 10.59 12.455 10.9181 12.45C11.5281 12.4406 12.2194 12.4306 12.7 11.95C13.1806 11.4694 13.1906 10.7781 13.2 10.1681C13.205 9.84 13.21 9.50125 13.295 9.29688C13.3869 9.07438 13.6306 8.82 13.8663 8.57375C14.2806 8.1425 14.75 7.6525 14.75 7C14.75 6.3475 14.2806 5.85812 13.8663 5.42625ZM10.6038 5.85375L7.10375 9.35375C7.05731 9.40024 7.00217 9.43712 6.94147 9.46228C6.88077 9.48744 6.81571 9.50039 6.75 9.50039C6.68429 9.50039 6.61923 9.48744 6.55853 9.46228C6.49783 9.43712 6.44269 9.40024 6.39625 9.35375L4.89625 7.85375C4.80243 7.75993 4.74972 7.63268 4.74972 7.5C4.74972 7.36732 4.80243 7.24007 4.89625 7.14625C4.99007 7.05243 5.11732 6.99972 5.25 6.99972C5.38268 6.99972 5.50993 7.05243 5.60375 7.14625L6.75 8.29313L9.89625 5.14625C9.94271 5.09979 9.99786 5.06294 10.0586 5.0378C10.1192 5.01266 10.1843 4.99972 10.25 4.99972C10.3157 4.99972 10.3808 5.01266 10.4414 5.0378C10.5021 5.06294 10.5573 5.09979 10.6038 5.14625C10.6502 5.1927 10.6871 5.24786 10.7122 5.30855C10.7373 5.36925 10.7503 5.4343 10.7503 5.5C10.7503 5.5657 10.7373 5.63075 10.7122 5.69145C10.6871 5.75214 10.6502 5.8073 10.6038 5.85375Z"
      fill="#14B8A6"
    />
  </svg>
);

export default function PopularListings() {
  return (
    <div className="py-10">
      {/* Header */}
      <div className="flex items-center justify-between px-4 max-w-6xl mx-auto mb-8">
        <h2 className="text-xl font-bold">Featured Listings</h2>
      </div>
      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-8">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white shadow-lg rounded-3xl overflow-hidden p-2"
          >
            {/* Card Header with Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={listing.image}
                alt={listing.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              {/* Wishlist Icon */}
              <FaHeart className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer text-xl z-10" />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              {/* Price & Type */}
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg text-gray-800">
                  {listing.price}
                </p>

                <div className="flex items-center gap-1">
                  {listing.type === "Buy" ? (
                    <span className="flex items-center gap-1">
                      <BuyBadgeIcon />
                      <span className="text-sm font-medium">Buy</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <RentBadgeIcon />
                      <span className="text-sm font-medium">Rent</span>
                    </span>
                  )}
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
    </div>
  );
}
