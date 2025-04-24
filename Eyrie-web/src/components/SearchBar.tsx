"use client";

import React, { useState } from 'react';
import { MagnifyingGlass, Microphone, Heart, Bell, BookmarkSimple } from 'phosphor-react';

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query, location);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 rounded-full bg-white shadow p-2">
      <div className="flex flex-1 items-center px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none py-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="p-2 text-gray-500 hover:text-gray-700">
          <MagnifyingGlass size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <Microphone size={20} />
        </button>
      </div>
      
      <div className="md:border-l border-gray-200 px-4 flex items-center">
        <select 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="outline-none bg-transparent py-2 w-full md:w-auto"
        >
          <option value="">Select a location</option>
          <option value="lagos">Lagos</option>
          <option value="abuja">Abuja</option>
          <option value="port-harcourt">Port Harcourt</option>
          <option value="ibadan">Ibadan</option>
          <option value="enugu">Enugu</option>
          <option value="calabar">Calabar</option>
          <option value="benin">Benin</option>
            <option value="owerri">Owerri</option>
            <option value="kano">Kano</option>
            <option value="yola">Yola</option>
            <option value="umudike">Umuahia</option>
            <option value="awka">Awka</option>
            <option value="onitsha">Onitsha</option>
            <option value="katsina">Katsina</option>
            <option value="adamawa">Adamawa</option>
            <option value="jigawa">Jigawa</option>
            <option value="plateau">Plateau</option>
            <option value="akwa-ibom">Akwa Ibom</option>
        </select>
      </div>
      
      <div className="flex items-center justify-end space-x-1 px-2">
        <button className="p-2 text-gray-500 hover:text-red-500">
          <Heart size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <Bell size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-yellow-500">
          <BookmarkSimple size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;