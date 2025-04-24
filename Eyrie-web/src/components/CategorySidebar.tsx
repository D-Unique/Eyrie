"use client";

import React from 'react';
import { House, Key, Calendar, Buildings, Factory} from 'phosphor-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface CategorySidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

export const defaultCategories: Category[] = [
  { id: 'buy', name: 'Buy', icon: <House size={20} /> },
  { id: 'rentals', name: 'Rentals', icon: <Key size={20} /> },
  { id: 'short-lets', name: 'Short Lets', icon: <Calendar size={20} /> },
  { id: 'bungalows', name: 'Bungalows', icon: <House size={20} /> },
  { id: 'duplexes', name: 'Duplexes', icon: <Buildings size={20} /> },
  { id: 'sky-scrapers', name: 'Sky Scrapers', icon: <Buildings size={20} /> },
  { id: 'storey-building', name: 'Storey Building', icon: <Factory size={20} /> },
];

const CategorySidebar: React.FC<CategorySidebarProps> = ({ 
  categories = defaultCategories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex items-center gap-3 p-3 rounded-lg transition ${
              selectedCategory === category.id 
                ? 'bg-orange-100 text-orange-500' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {category.icon}
            </div>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;