import { Listing } from '../types';

interface MapViewProps {
  listings: Listing[];
}

export default function MapView({ listings }: MapViewProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 sm:p-8 min-h-96">
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg mb-4">
          Map View Coming Soon
        </p>
        <p className="text-sm text-gray-500">
          Showing {listings.length} listings ready to be displayed on map
        </p>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg inline-block">
          <p className="text-sm text-blue-700">
            Leaflet integration will display all listings as interactive markers centered on Amsterdam
          </p>
        </div>
      </div>
    </div>
  );
}
