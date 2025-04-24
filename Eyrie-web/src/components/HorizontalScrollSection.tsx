"use client";

import React from 'react';
import { House, Buildings, Factory} from 'phosphor-react';

interface CategoryItem {
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
}

interface HorizontalScrollSectionProps {
  title: string;
  categories: CategoryItem[];
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({ title, categories = [] }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={category.onClick}
            className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg hover:bg-orange-100 transition"
          >
            <div className="text-orange-500">{category.icon}</div>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Pre-defined category constants for ease of use
export const propertyCategories = [
  {
    icon: <House size={24} />,
    name: 'Bungalows',
    onClick: () => console.log('Bungalows clicked')
  },
  {
    icon: <Buildings size={24} />,
    name: 'Duplexes',
    onClick: () => console.log('Duplexes clicked')
  },
  {
    icon: <Buildings size={24} />,
    name: 'Sky Scrapers',
    onClick: () => console.log('Sky Scrapers clicked')
  },
  {
    icon: <Factory size={24} />,
    name: 'Storey Buildings',
    onClick: () => console.log('Storey Buildings clicked')
  },
];

export default HorizontalScrollSection;