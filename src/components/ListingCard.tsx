import { Heart } from 'lucide-react';
import { Listing } from '../types';
import { useFavorites } from '../hooks/useFavorites';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(listing.id);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all overflow-hidden h-full flex flex-col">
      {/* Card Header */}
      <div className="p-4 sm:p-6 pb-3 border-b border-gray-200">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
              {listing.address}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{listing.neighborhood}</p>
          </div>
          <button
            onClick={() => toggleFavorite(listing.id)}
            className={`flex-shrink-0 p-2 rounded-lg transition-all ${
              favorited
                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
            }`}
            title={favorited ? 'Remove favorite' : 'Add favorite'}
          >
            <Heart className={`h-5 w-5 ${favorited ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-6 flex-grow space-y-3 sm:space-y-4">
        {/* Price and Size */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">Price</p>
            <p className="text-lg sm:text-xl font-bold text-blue-600">€{listing.rent}</p>
            <p className="text-xs text-gray-500">/month</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">Size</p>
            <p className="text-lg sm:text-xl font-bold text-green-600">{listing.size}m²</p>
            <p className="text-xs text-gray-500">sqm</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs text-gray-600 font-medium">Bedrooms</p>
            <p className="font-semibold text-gray-900">{listing.bedrooms}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium">Bathrooms</p>
            <p className="font-semibold text-gray-900">{listing.bathrooms}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium">Agency</p>
            <p className="font-semibold text-gray-900">{listing.agency}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium">Available</p>
            <p className="font-semibold text-gray-900">{listing.availability_date}</p>
          </div>
        </div>

        {/* Condition Badge */}
        <div className="flex gap-2">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            listing.condition === 'furnished'
              ? 'bg-amber-100 text-amber-700'
              : 'bg-indigo-100 text-indigo-700'
          }`}>
            {listing.condition === 'furnished' ? '🛋️ Furnished' : '📦 Upholstered'}
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 sm:p-6 pt-3 border-t border-gray-200">
        <a
          href={listing.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Original →
        </a>
      </div>
    </div>
  );
}
