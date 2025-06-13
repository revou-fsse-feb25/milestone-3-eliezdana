# RevoShop - Project Milestone 3 (Front-end Applications)

This repository contains the source code for the RevoShop e-commerce platform, built with Next.js as part of the RevoU curriculum. This milestone focuses on building the foundational front-end features, including product display and data fetching strategies.

## Features Implemented (Module 4)

The following features have been successfully coded and are present in the `src` directory:

-   **Product Listing Page:**
    -   Located at `/products`.
    -   Fetches all products from FakeStoreAPI.
    -   Uses Static Site Generation (SSG) with revalidation (ISR) for high performance and periodic updates.
    -   Displays products in a responsive grid layout using Tailwind CSS.

-   **Dynamic Product Detail Page:**
    -   Located at the dynamic route `/products/[id]`.
    -   Fetches individual product data dynamically using Server-Side Rendering (SSR) to ensure data is always up-to-date.
    -   Displays detailed product information including image, title, price, category, and description.

-   **Reusable Components:**
    -   A `<Header>` component for consistent site navigation.
    -   A `<ProductCard>` component to ensure a uniform look for items in the product grid.

-   **Styling:**
    -   Styled with Tailwind CSS for a clean and modern user interface.

## Technologies Used

-   **Next.js:** 15.x
-   **React:** 18.x
-   **TypeScript**
-   **Tailwind CSS**
-   **FakeStoreAPI:** Used for product and user data.

## Current Status & Known Issues

**Current Status:** The implementation of all core features for Module 4 is complete. The code structure for pages, components, and types has been established.

**Known Issue:** The project is currently facing a local environment configuration issue resulting in an `'next' is not recognized as an internal or external command` error. This prevents the development server from running locally. This issue will be addressed in a session with a mentor to resolve the underlying dependency or environment path problem.

## How to Run (Theoretically)

Once the local environment issue is resolved, the project can be run with the following commands:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```