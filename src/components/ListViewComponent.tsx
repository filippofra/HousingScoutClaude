import { useState } from 'react';
import { Listing } from '../types';
import ListingCard from './ListingCard';

interface ListViewProps {
  listings: Listing[];
}

export default function ListViewComponent({ listings }: ListViewProps) {
  // For sorting options
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'size-asc' | 'date'>('price-asc');

  const sortedListings = [...listings].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.rent - b.rent;
      case 'price-desc':
        return b.rent - a.rent;
      case 'size-asc':
        return a.size - b.size;
      case 'date':
        return new Date(b.posted_date).getTime() - new Date(a.posted_date).getTime();
      default:
        return 0;
    }
  });

  if (listings.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-500 text-lg">No listings match your filters</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your price range or agency selections</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Sort Controls */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sort by:
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="size-asc">Size: Small to Large</option>
          <option value="date">Newest First</option>
        </select>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sortedListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {/* Results Count */}
      <div className="text-center py-4 text-gray-600 text-sm">
        Showing {sortedListings.length} of {listings.length} listings
      </div>
    </div>
  );
}
