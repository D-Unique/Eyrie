import Image from "next/image";
import {
  HomeIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

type ListingDetailsProps = {
  listing: {
    image: string;
    title: string;
    location: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
    type: string;
    description: string;
    gallery: string[];
  };
};

export default function ListingDetails({ listing }: ListingDetailsProps) {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <aside className="hidden lg:block bg-[#F2F2F2] p-6 self-start lg:sticky lg:top-20"></aside>

          {/* Main Details */}
          <main className="lg:col-span-3">
            <div className="mb-6 px-4">
              <div className="flex items-center text-sm text-[#555] space-x-2 mb-6">
                <HomeIcon className="h-5 w-5 text-[#161616]" />
                <div className="flex items-center space-x-1">
                  <span className="text-[#161616]">Main Page</span>
                  <span>&gt;&gt;</span>
                  <span className="text-[#161616]">Categories</span>
                  <span>&gt;&gt;</span>
                  <span className="text-[#161616] truncate">Bungalows</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4 truncate">{listing.title}</h1>
              <p className="text-sm text-[#555] truncate">
                Get the best-suited bungalows at the best prices
              </p>
            </div>

            {/* Listing Image */}
            <div className="mb-6 h-[600px] md:h-[700px] lg:h-[800px] relative rounded-3xl overflow-hidden">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </div>

            {/* Image Gallery */}
            <div className="overflow-x-auto">
              <div className="flex gap-4 mb-6 min-w-max px-1">
                {listing.gallery.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    width={250}
                    height={250}
                    className="w-[250px] h-[180px] object-cover rounded-xl flex-shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                <h1 className="text-2xl text-[#161616] font-bold truncate">
                  {listing.title}
                </h1>
                <button className="w-full sm:w-auto px-4 py-2 bg-[#F4FFFE] text-[#0B655B] font-bold border border-[#43C6B8] rounded-full hover:bg-[#00C853] hover:text-white transition">
                  Save for Later
                </button>
              </div>
              <p className="text-[#555] mb-4 flex items-center gap-2 truncate">
                <MapPinIcon className="h-6 w-6 text-[#FF4500]" />
                {listing.location}
              </p>
              <p className="text-[#555] mb-4 truncate">{listing.description}</p>
              <div className="border-b border-[#161616] mt-8"></div>
            </div>

            {/* Cost Section */}
            <div className="mb-6 bg-[#F2F2F2]">
              {/* Top Row: Cost label and Price */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl text-[#161616] font-bold truncate">Cost</h2>
                <p className="text-2xl font-bold text-[#161616] truncate">
                  {listing.price}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <button className="px-8 py-3 text-[#5E2B97] font-bold text-sm border bg-[#FAF6FF] border-[#7E55AC] rounded-full hover:bg-[#7E3AF2] hover:text-white transition">
                  Request Virtual Inspection
                </button>
                <button className="px-8 py-3 text-[#0B655B] font-bold text-sm border bg-[#F4FFFE] border-[#43C6B8] rounded-full hover:bg-[#00C853] hover:text-white transition">
                  Request Physical Inspection
                </button>
                <button className="px-8 py-3 bg-[#FF4500] text-[#FBFBFB] font-bold text-sm rounded-full hover:bg-[#FF5722] transition">
                  Proceed to Payment
                </button>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-6">
              <p className="text-sm text-[#161616] mb-4 truncate">
                For more enquiries, contact us via
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-center text-[#B53100] gap-2 px-24 py-3 sm:px-24 md:px-28 lg:px-48 bg-[#FFEDE6] border border-[#FF4500] rounded-full hover:bg-[#FF4500] hover:text-white transition">
                  <PhoneIcon className="h-5 w-5" />
                </button>
                <button className="flex items-center justify-center gap-2 px-24 py-3 sm:px-24 md:px-28 lg:px-48 bg-[#161616] text-[#FBFBFB] rounded-full hover:opacity-90 transition">
                  <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}