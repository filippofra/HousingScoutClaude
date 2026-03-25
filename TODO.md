# 🏠 Amsterdam Housing Scout: Development Roadmap

## 🎯 Project Core Constraints
* **Target City:** Amsterdam
* **Max Rent:** ≤ 2000 EUR
* **Min Size:** ≥ 30 sqm
* **Availability:** MUST be on or before **May 1st, 2026** (Strict).
* **Condition:** Furnished or Upholstered only (No Casco/Shell).

---

## 🛠 Phase 1: Environment & Tooling
- [x] Create GitHub Repository & Launch Codespace
- [x] Create `URS.md`, `DS.md`, `TEST.md`, and `listings.json`
- [x] Ensure **GitHub Copilot Chat** is active in the sidebar
- [x] Switch Copilot Chat model to **Claude 3.5 Sonnet**

## 🏗 Phase 2: Project Scaffolding
- [x] Use Copilot to initialize Vite Project (React + TypeScript)
- [x] Install Tailwind CSS, Leaflet, and Lucide-React
- [x] Setup Folder Structure: `/src/components`, `/src/hooks`, `/src/context`, `/src/data`
- [x] Move `listings.json` into the `/src/data` folder

## 🖥 Phase 3: UI Shell & Navigation [FR-01, FR-02, FR-08]
- [x] **Layout Engine:** Create `Layout.tsx` with a responsive header.
- [x] **View Switcher:** Implement the List/Map toggle button [FR-01].
- [x] **Navigation:** Set up state to toggle between "All Listings" and "Favorites" [FR-02].
- [x] **Mobile Polish:** Ensure the sidebar/header is responsive [UT-10].

## ⚡ Phase 4: Core Feature Development [FR-06, FR-03, FR-04]
- [x] **Dynamic Card Component:**
    - [x] Render: Address, Neighborhood, Price, Agency, Date, Condition.
    - [x] Implement the "Favorite" Heart toggle [FR-06].
- [x] **Filter Bar Component:**
    - [x] Build Min/Max Price sliders [FR-03].
    - [x] Build Agency multi-select checkboxes [FR-04].
- [x] **Map Implementation:**
    - [x] Initialize Leaflet map centered on Amsterdam.
    - [x] Map markers to listings with custom Popups.

## ⚙️ Phase 5: Business Logic & Persistence [FR-05, FR-07]
- [x] **The "Hard Filter" Hook:** Implement the 2000 EUR / 30 sqm / May 1st deadline logic [TS-05, UT-05].
- [x] **Storage Sync:** Implement `localStorage` to save and load favorites on refresh [FR-07, UT-09].

## 🧪 Phase 6: Testing & Deployment
- [x] **Unit Testing:** Manually verify UT-01 through UT-10 in `TEST.md`.
- [x] **Live Deploy:** Connect repository to Vercel.