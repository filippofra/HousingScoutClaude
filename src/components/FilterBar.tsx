import { Listing } from '../types';

interface FilterBarProps {
  listings: Listing[];
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (price: number) => void;
  onMaxPriceChange: (price: number) => void;
  selectedAgencies: string[];
  onAgenciesChange: (agencies: string[]) => void;
}

export default function FilterBar({
  listings,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  selectedAgencies,
  onAgenciesChange,
}: FilterBarProps) {
  // Get unique agencies from listings
  const agencies = Array.from(new Set(listings.map((l) => l.agency))).sort();
  const maxListingPrice = Math.max(...listings.map((l) => l.rent));

  const toggleAgency = (agency: string) => {
    if (selectedAgencies.includes(agency)) {
      onAgenciesChange(selectedAgencies.filter((a) => a !== agency));
    } else {
      onAgenciesChange([...selectedAgencies, agency]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Filters</h3>

      {/* Price Range Slider */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range: €{minPrice} - €{maxPrice}
          </label>
          <div className="space-y-3">
            <div>
              <label htmlFor="min-price" className="text-xs text-gray-600">
                Minimum Price
              </label>
              <input
                id="min-price"
                type="range"
                min="0"
                max={maxListingPrice}
                value={minPrice}
                onChange={(e) => onMinPriceChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <p className="text-xs text-gray-500 mt-1">€{minPrice}/month</p>
            </div>
            <div>
              <label htmlFor="max-price" className="text-xs text-gray-600">
                Maximum Price
              </label>
              <input
                id="max-price"
                type="range"
                min="0"
                max={maxListingPrice}
                value={maxPrice}
                onChange={(e) => onMaxPriceChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <p className="text-xs text-gray-500 mt-1">€{maxPrice}/month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agency Filter */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-900">Filter by Agency</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
          {agencies.map((agency) => (
            <label
              key={agency}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedAgencies.includes(agency)}
                onChange={() => toggleAgency(agency)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 cursor-pointer accent-blue-600"
              />
              <span className="text-sm text-gray-700">{agency}</span>
              <span className="ml-auto text-xs text-gray-500">
                ({listings.filter((l) => l.agency === agency).length})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          onMinPriceChange(0);
          onMaxPriceChange(maxListingPrice);
          onAgenciesChange([]);
        }}
        className="w-full px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
      >
        Reset Filters
      </button>
    </div>
  );
}
