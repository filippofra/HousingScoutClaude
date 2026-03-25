import { MapPin, List, Heart } from 'lucide-react';
import { useViewContext } from '../context/ViewContext';

interface HeaderNavProps {
  mobile?: boolean;
}

export default function HeaderNav({ mobile = false }: HeaderNavProps) {
  const { view, setView, navigation, setNavigation } = useViewContext();

  const baseClasses = mobile
    ? 'flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200'
    : 'flex items-center gap-1 sm:gap-2';

  const buttonClasses = (isActive: boolean) =>
    `inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors ${
      isActive
        ? 'bg-blue-100 text-blue-700'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    } text-sm sm:text-base`;

  return (
    <nav className={baseClasses}>
      {/* View Toggle: List vs Map */}
      <div className={mobile ? 'space-y-2' : 'flex items-center gap-1'}>
        <button
          onClick={() => setView('list')}
          className={buttonClasses(view === 'list')}
          title="List View"
        >
          <List className="h-4 w-4" />
          <span className="hidden sm:inline">List</span>
        </button>
        <button
          onClick={() => setView('map')}
          className={buttonClasses(view === 'map')}
          title="Map View"
        >
          <MapPin className="h-4 w-4" />
          <span className="hidden sm:inline">Map</span>
        </button>
      </div>

      {/* Navigation Toggle: All vs Favorites */}
      <div className={mobile ? 'space-y-2' : 'flex items-center gap-1'}>
        <button
          onClick={() => setNavigation('all')}
          className={buttonClasses(navigation === 'all')}
          title="All Listings"
        >
          <span className="hidden sm:inline">All Listings</span>
          <span className="sm:hidden">All</span>
        </button>
        <button
          onClick={() => setNavigation('favorites')}
          className={buttonClasses(navigation === 'favorites')}
          title="Favorites"
        >
          <Heart className="h-4 w-4" />
          <span className="hidden sm:inline">Favorites</span>
        </button>
      </div>
    </nav>
  );
}
