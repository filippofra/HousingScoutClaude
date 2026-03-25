import { Listing } from '../types';

// Hard filter constraints from URS.md [FR-05]
const HARD_FILTERS = {
  MAX_RENT: 2000, // EUR
  MIN_SIZE: 30, // m²
  DEADLINE: new Date('2026-05-01'), // May 1st, 2026
  ALLOWED_CONDITIONS: ['furnished', 'upholstered'], // lowercase for comparison
};

/**
 * useHardFilters hook
 * Enforces strict filtering rules per URS.md [FR-05] and TS-05
 * - Rent ≤ 2000 EUR
 * - Size ≥ 30 m²
 * - Availability ≤ May 1, 2026
 * - Condition must be "Furnished" or "Upholstered" (not "Casco")
 */
export function useHardFilters() {
  /**
   * Filter listings to only include those meeting hard constraints
   * [UT-05, UT-06, UT-07]
   */
  const applyHardFilters = (listings: Listing[]): Listing[] => {
    return listings.filter((listing) => {
      // UT-06: Check minimum size (≥ 30 m²)
      if (listing.size < HARD_FILTERS.MIN_SIZE) {
        return false;
      }

      // Check maximum rent (≤ 2000 EUR)
      if (listing.rent > HARD_FILTERS.MAX_RENT) {
        return false;
      }

      // UT-05: Check availability deadline (≤ May 1, 2026)
      const availabilityDate = new Date(listing.availability_date);
      if (availabilityDate > HARD_FILTERS.DEADLINE) {
        return false;
      }

      // UT-07: Check condition (Furnished or Upholstered only, not Casco)
      const condition = listing.condition.toLowerCase();
      if (!HARD_FILTERS.ALLOWED_CONDITIONS.includes(condition)) {
        return false;
      }

      // All constraints passed
      return true;
    });
  };

  return { applyHardFilters };
}
