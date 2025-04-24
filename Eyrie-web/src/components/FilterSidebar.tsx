"use client";

import React, { useState } from 'react';
import { CaretDown } from 'phosphor-react';

interface FilterOption {
  label: string;
  options?: string[];
  isRange?: boolean;
  min?: number;
  max?: number;
}

interface FilterSidebarProps {
  filters: FilterOption[];
  onApplyFilters: (filters: Record<string, any>) => void;
}

export const defaultFilters: FilterOption[] = [
  { label: 'Location', options: ['Umuahia', 'Aba', 'Owerri', 'Onitsha', 'Awka', 'Enugu', 'Kano', 'Katsina', 'Plateau', 'Adamawa', 'Yola', 'Akwa Ibom', 'Uyo', 'Jigawa', 'Lagos', 'Abuja', 'Port Harcourt', 'Ibadan'] },
  { label: 'Price Range', isRange: true, min: 1000000, max: 100000000 },
  { label: 'Property Type', options: ['Bungalow', 'Duplex', 'Apartment', 'Land'] },
  { label: 'Bedroom', options: ['1', '2', '3', '4+'] },
  { label: 'Furnishing', options: ['Furnished', 'Semi-furnished', 'Unfurnished'] },
];

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  filters = defaultFilters, 
  onApplyFilters 
}) => {
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>({});

  const toggleFilter = (label: string) => {
    setExpandedFilter(expandedFilter === label ? null : label);
  };

  const handleFilterChange = (label: string, value: any) => {
    setSelectedFilters({
      ...selectedFilters,
      [label]: value
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-6">Filter</h2>
      <div className="flex flex-col gap-3">
        {filters.map((filter) => (
          <div key={filter.label} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-3 text-left hover:bg-gray-50"
              onClick={() => toggleFilter(filter.label)}
            >
              <span className="font-medium">{filter.label}</span>
              <CaretDown 
                size={16}
                className={`transition-transform ${
                  expandedFilter === filter.label ? 'transform rotate-180' : ''
                }`} 
              />
            </button>
            {expandedFilter === filter.label && (
              <div className="p-3 border-t border-gray-200">
                {filter.isRange ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-24 p-2 border border-gray-200 rounded"
                        min={filter.min}
                        max={filter.max}
                        onChange={(e) =>
                          handleFilterChange(filter.label, {
                            ...selectedFilters[filter.label],
                            min: parseInt(e.target.value)
                          })
                        }
                      />
                      <span className="mx-2">-</span>
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-24 p-2 border border-gray-200 rounded"
                        min={filter.min}
                        max={filter.max}
                        onChange={(e) =>
                          handleFilterChange(filter.label, {
                            ...selectedFilters[filter.label],
                            max: parseInt(e.target.value)
                          })
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    {filter.options?.map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          onChange={(e) =>
                            handleFilterChange(filter.label, {
                              ...selectedFilters[filter.label],
                              [option]: e.target.checked
                            })
                          }
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;