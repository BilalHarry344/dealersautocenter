# AutoCenter Mini Dashboard

Modern React + TypeScript + Vite + Tailwind application that includes:

- API-based vehicle listing dashboard
- Search and sorting
- Vehicle detail page
- Validated user input form
- Snackbar feedback
- Fully responsive modern UI

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- ESLint + TypeScript ESLint

## Prerequisites

- Node.js 18+ (recommended: 20+)
- npm 9+
- Internet connection (for vehicle data API and placeholder images)

## Installation

```bash
npm install
```

## Run Commands

- Start development server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

- Preview production build locally:

```bash
npm run preview
```

- Run lint checks:

```bash
npm run lint
```

## Application Routes

- `/` - Vehicle listing dashboard
- `/vehicle/:vehicleId` - Vehicle detail page
- `/form` - User form with validation and snackbar success feedback

## Implemented Features

### Task 1 - API Listing Page

- Fetches vehicles from `https://myfakeapi.com/api/cars/`
- Maps API response into internal `Vehicle` interface
- Card/grid layout with:
  - Title
  - Image
  - Price
- Search by vehicle name/title
- Sorting options:
  - Name A-Z
  - Name Z-A
  - Price low-high
  - Price high-low
- Loading state
- Error state
- Debounced search (300ms)
- Clickable cards leading to detail page

### Task 2 - Form + Validation

- Fields:
  - Full Name
  - Email
  - Phone Number
  - Password
- Rules:
  - All fields required
  - Email format required
  - Password minimum 6 characters
- Inline field-level errors
- Prevents invalid submission
- On valid submit:
  - Form resets
  - Success snackbar appears at top-right

## Project Structure

```text
src/
  components/
    common/
      Snackbar.tsx
    FormField.tsx
    ProductCard.tsx
    SearchSortBar.tsx
  constants/
    api.ts
    routes.ts
    uiText.ts
    validationText.ts
  data/
    initialValues.ts
  hooks/
    useDebounce.ts
  interfaces/
    form.ts
    vehicle.ts
    props/
      formFieldProps.ts
      productCardProps.ts
      searchSortBarProps.ts
      snackbarProps.ts
  pages/
    FormPage.tsx
    ListingPage.tsx
    VehicleDetailsPage.tsx
  services/
    productsApi.ts
  utils/
    validators.ts
  App.tsx
  main.tsx
```

## API Notes

- Source API: `https://myfakeapi.com/api/cars/`
- The API returns car data without images; the app generates seeded placeholder images via `picsum.photos`.
- `productsApi.ts` includes:
  - fetch list function
  - single-item lookup function for detail page
  - price parsing from string to number

## UI Notes

- Custom favicon: `public/autocenter-favicon.svg`
- Modern dark glassmorphism layout
- Responsive across mobile, tablet, and desktop
- Sticky header with route-aware nav states

## Quick Start (Full Flow)

```bash
npm install
npm run dev
```

Open the URL shown in terminal (usually `http://localhost:5173`), then:

1. Visit listing page (`/`)
2. Search/sort vehicles
3. Open a vehicle detail page
4. Go to form (`/form`)
5. Test validation and successful submit snackbar

## Troubleshooting

- If listing fails to load:
  - Check internet connection
  - Verify the API endpoint is reachable in browser
- If styles are missing:
  - Ensure `npm install` finished successfully
  - Restart dev server
- If lint fails:
  - Run `npm run lint` and resolve reported issues
