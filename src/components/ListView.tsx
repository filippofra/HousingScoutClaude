import { Listing } from '../types';

interface ListViewProps {
  listings: Listing[];
}

export default function ListView({ listings }: ListViewProps) {
  if (listings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No listings found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
        >
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {listing.address}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{listing.neighborhood}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <p className="text-gray-600">Price</p>
                <p className="font-semibold text-blue-600">€{listing.rent}/mo</p>
              </div>
              <div>
                <p className="text-gray-600">Size</p>
                <p className="font-semibold text-blue-600">{listing.size}m²</p>
              </div>
              <div>
                <p className="text-gray-600">Agency</p>
                <p className="text-sm">{listing.agency}</p>
              </div>
              <div>
                <p className="text-gray-600">Available</p>
                <p className="text-sm">{listing.availability_date}</p>
              </div>
            </div>

            <a
              href={listing.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Original
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
