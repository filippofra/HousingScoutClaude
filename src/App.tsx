import { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
import ListViewComponent from './components/ListViewComponent';
import MapViewComponent from './components/MapViewComponent';
import FilterBar from './components/FilterBar';
import { ViewProvider, useViewContext } from './context/ViewContext';
import { useFavorites } from './hooks/useFavorites';
import { useHardFilters } from './hooks/useHardFilters';
import { Listing } from './types';
import listingsData from './data/listings.json';

function AppContent() {
  const { view, navigation } = useViewContext();
  const { markListingsWithFavorites } = useFavorites();
  const { applyHardFilters } = useHardFilters();
  const [listings, setListings] = useState<Listing[]>([]);
  
  // Filter state
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedAgencies, setSelectedAgencies] = useState<string[]>([]);

  // Load and process listings
  useEffect(() => {
    // Apply hard filters first [FR-05, TS-05]
    const hardFilteredListings = applyHardFilters(listingsData as Listing[]);
    // Then mark with favorites
    const processedListings = markListingsWithFavorites(hardFilteredListings);
    setListings(processedListings);
    
    // Set max price to the highest rent, with fallback
    if (processedListings.length > 0) {
      setMaxPrice(Math.max(...processedListings.map((l) => l.rent)));
    }
  }, []);

  // Apply filters to listings
  const filteredListings = listings.filter((listing) => {
    // Navigation filter (all vs favorites)
    if (navigation === 'favorites' && !listing.isFavorite) {
      return false;
    }

    // Price filter
    if (listing.rent < minPrice || listing.rent > maxPrice) {
      return false;
    }

    // Agency filter
    if (selectedAgencies.length > 0 && !selectedAgencies.includes(listing.agency)) {
      return false;
    }

    return true;
  });

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1">
          <FilterBar
            listings={listings}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
            selectedAgencies={selectedAgencies}
            onAgenciesChange={setSelectedAgencies}
          />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 space-y-6">
          {/* Header info */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {navigation === 'all' ? 'All Listings' : 'My Favorites'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {navigation === 'all'
                ? `Found ${filteredListings.length} apartment${filteredListings.length !== 1 ? 's' : ''}`
                : `You have ${filteredListings.length} favorite${filteredListings.length !== 1 ? 's' : ''}`}
            </p>
          </div>

          {/* Content View */}
          {view === 'list' ? (
            <ListViewComponent listings={filteredListings} />
          ) : (
            <MapViewComponent listings={filteredListings} />
          )}
        </main>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <ViewProvider>
      <AppContent />
    </ViewProvider>
  );
}

export default App;
