import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Listing } from '../types';

// Set default icon for Leaflet - use built-in defaults
L.Icon.Default.mergeOptions({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapViewProps {
  listings: Listing[];
}

export default function MapViewComponent({ listings }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map only once
    if (!map.current) {
      try {
        // Amsterdam center coordinates
        const AMSTERDAM_CENTER: [number, number] = [52.3676, 4.9041];

        map.current = L.map(mapContainer.current).setView(AMSTERDAM_CENTER, 12);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map.current);
      } catch (error) {
        console.error('Error initializing map:', error);
        return;
      }
    }

    if (!map.current || listings.length === 0) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add new markers for each listing
    listings.forEach((listing) => {
      if (map.current && listing.latitude && listing.longitude) {
        try {
          const marker = L.marker([listing.latitude, listing.longitude])
            .addTo(map.current)
            .bindPopup(`
              <div class="text-sm">
                <h3 class="font-semibold text-gray-900 mb-1">${listing.address}</h3>
                <p class="text-gray-600 text-xs mb-2">${listing.neighborhood}</p>
                <div class="flex justify-between text-sm font-medium mb-2">
                  <span class="text-blue-600">€${listing.rent}/mo</span>
                  <span class="text-green-600">${listing.size}m²</span>
                </div>
                <p class="text-gray-700 text-xs mb-2">Agency: ${listing.agency}</p>
                <a href="${listing.link}" target="_blank" rel="noopener noreferrer" 
                   class="text-blue-600 hover:text-blue-800 underline text-xs">
                  View Original →
                </a>
              </div>
            `);

          markersRef.current.push(marker);
        } catch (error) {
          console.error('Error adding marker:', error);
        }
      }
    });

    // Fit map bounds if there are markers
    if (markersRef.current.length > 0 && map.current) {
      try {
        const group = new L.FeatureGroup(markersRef.current);
        map.current.fitBounds(group.getBounds(), { padding: [50, 50] });
      } catch (error) {
        console.error('Error fitting bounds:', error);
      }
    }
  }, [listings]);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div
        ref={mapContainer}
        className="w-full h-96 sm:h-[500px] lg:h-[600px] relative"
        id="map"
      />
      {!listings.length && (
        <div className="p-6 text-center">
          <p className="text-gray-500">No listings to display on the map</p>
        </div>
      )}
    </div>
  );
}
