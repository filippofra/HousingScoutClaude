# 📄 User Requirements Specification (URS): Amsterdam Housing Scout

## 1. Goal
To provide a unified interface for tracking Amsterdam rental properties from 11 specific agency sources, ensuring all listings meet strict quality and budget criteria.

## 2. Functional Requirements (FR)

### 2.1 Navigation & Views
* **[FR-01] View Toggle:** Users must be able to switch instantly between a "List View" (scrolling cards) and a "Map View" (interactive pins).
* **[FR-02] Favorites Section:** A dedicated area or page to view only the apartments the user has "hearted."

### 2.2 Filtering System
* **[FR-03] Price Filter:** Users can set a Minimum and Maximum monthly rent.
* **[FR-04] Agency Filter:** A multi-select filter to show/hide listings from specific agencies.
* **[FR-05] Core Hard-Filters:** The system must automatically exclude listings that don't meet:
    * Rent $\le$ 2,000 EUR
    * Size $\ge$ 30 m²
    * **Availability: MUST be on or before May 1st, 2026 (No dates later than May 1st).**
    * Condition: Furnished/Upholstered only (No "Casco/Shell").

### 2.3 Listing Information
* **[FR-06] Dynamic Cards:** Each apartment must be represented by a card showing:
    * Address & Neighborhood
    * Price & Agency Name
    * Availability Date & Condition (Furnished/Upholstered)
    * "Favorite" Toggle (Heart icon)
    * Direct link to original listing.

## 3. Data Sources
The app targets listings from: REBO, Hoekstra, Schep, Vesteda, Verhuurt Beter, NMG, VBT, Van der Linden, Expat Homes, Alcoco, and LIV Residential.

## 4. Non-Functional Requirements
* **[FR-07] Persistence:** Favorites must be saved so they don't disappear when the browser refreshes.
* **[FR-08] Mobile-First:** The UI must be optimized for mobile phone usage.