import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Bed, Shower, ArrowsOutCardinal } from 'phosphor-react';
import { formatCurrency } from '@/lib/utils';

export interface PropertyDetails {
  id: string;
  title: string;
  price: number;
  location: {
    city: string;
    state: string;
  };
  features: {
    beds: number;
    baths: number;
    area: number;
  };
  type: 'Bungalow' | 'Duplex' | 'Semi-detachable Duplex' | 'Skyscraper' | string;
  listingType: 'Buy' | 'Rent';
  imageUrl: string;
}

interface HouseCardProps {
  property: PropertyDetails;
}

const HouseCard: React.FC<HouseCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <div className="w-full h-48 relative">
          <Image 
            src={property.imageUrl} 
            alt={property.title} 
            fill
            className="object-cover"
          />
        </div>
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
          <Heart size={20} weight="light" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{formatCurrency(property.price)}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            property.listingType === 'Buy' 
              ? 'bg-yellow-100 text-yellow-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {property.listingType}
          </span>
        </div>
        <p className="text-gray-700 font-medium mb-2">{property.title}</p>
        <p className="text-gray-500 text-sm mb-4">
          {property.location.city}, {property.location.state}
        </p>
        <div className="flex justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1">
            <Bed size={16} className="text-gray-400" />
            <span className="text-sm">{property.features.beds} Bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Shower size={16} className="text-gray-400" />
            <span className="text-sm">{property.features.baths} Bath</span>
          </div>
          <div className="flex items-center gap-1">
            <ArrowsOutCardinal size={16} className="text-gray-400" />
            <span className="text-sm">{property.features.area} Sqft</span>
          </div>
        </div>
        <Link href={`/properties/${property.id}`}>
          <button className="w-full mt-4 text-gray-600 text-sm font-medium py-2 hover:text-gray-800 flex items-center justify-center">
            View Details
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;