# 🧪 Unit Test Framework: Amsterdam Housing Scout

This document outlines the test cases required to validate the Functional Requirements (FR) defined in the URS.

| Test ID | Reference | Test Scenario | Expected Result |
| :--- | :--- | :--- | :--- |
| **UT-01** | **FR-01** | Click the "Map" button in the toggle. | UI hides the List and displays the Map component. |
| **UT-02** | **FR-02** | Heart a listing and navigate to "Favorites." | Only the hearted listing appears in the Favorites view. |
| **UT-03** | **FR-03** | Set Max Price filter to 1500 EUR. | Listings with price > 1500 disappear from the view. |
| **UT-04** | **FR-04** | Deselect "Vesteda" from Agency filter. | All Vesteda listings are hidden from the list and map. |
| **UT-05** | **FR-05** | Input a listing with date "2026-05-05". | **Listing is automatically excluded** (Deadline check). |
| **UT-06** | **FR-05** | Input a listing with size "25 m²". | Listing is automatically excluded (Size check). |
| **UT-07** | **FR-05** | Input a listing with condition "Casco". | Listing is automatically excluded (Condition check). |
| **UT-08** | **FR-06** | Check dynamic card rendering. | Address, Neighborhood, Price, Agency, and Link are all visible. |
| **UT-09** | **FR-07** | Refresh the browser tab. | Previously "hearted" items remain hearted. |
| **UT-10** | **FR-08** | Resize screen to 375px width (Mobile). | Sidebar/Filters collapse into a mobile-friendly menu or drawer. |