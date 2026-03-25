# 🏗 Design Specification (DS): Amsterdam Housing Scout

## 1. Technical Stack
* **Framework:** React 19 (Vite) + TypeScript.
* **Styling:** Tailwind CSS.
* **Maps:** Leaflet.js with `react-leaflet`.
* **Icons:** `lucide-react`.

## 2. Component Architecture
* **`Layout.tsx`**: Main container.
* **`FilterBar.tsx`**: State management for Price/Agency.
* **`ListingCard.tsx`**: UI component for [FR-06].
* **`MapView.tsx`**: Map rendering.
* **`FavoritesView.tsx`**: Logic to filter `isFavorite === true`.

## 3. Implementation Details
* **Filtering Logic [TS-05]:** * `isAvailable`: Date must be $\le$ 2026-05-01.
    * `isBudget`: Price must be $\le$ 2000.
    * `isRightSize`: m² must be $\ge$ 30.
* **Persistence [TS-07]:** `localStorage.setItem('favorites', JSON.stringify(favList))`.

## 4. Mapping URS to Technical Implementation
| URS ID | Technical Solution (DS) |
| :--- | :--- |
| **FR-01** | `ViewContext` state toggle. |
| **FR-02** | Filter main array by IDs stored in `localStorage`. |
| **FR-05** | `listings.filter(item => new Date(item.date) <= new Date('2026-05-01'))`. |
| **FR-07** | `useEffect` hook to read/write to `localStorage`. |