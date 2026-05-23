# FoodOrder — A Swiggy-Inspired Food Ordering App

A modern, fully responsive food ordering web app built with React 18. Browse restaurants, explore menus, add items to your cart, and place orders — all with a clean Swiggy-like UI.

**Live:** [foodordering-platform.vercel.app](https://foodordering-platform.vercel.app)

---

## Features

- **Restaurant Listing** — Browse restaurants with live search and top-rated filter
- **Restaurant Menu** — Expandable category accordion with item images, prices, and veg/non-veg indicators
- **Cart** — Add items, view bill summary (subtotal, delivery fee, GST), place order with success screen
- **About Page** — Product features, tech stack, and developer info
- **Contact Page** — Form with validation and success state
- **Shimmer UI** — Skeleton loading while data fetches
- **Online/Offline Detection** — Real-time network status in the header
- **Back Navigation** — Back to restaurants button on every menu page
- **Promoted Labels** — HOC-based promoted restaurant badge
- **Lazy Loading** — Code splitting for About page via `React.lazy`

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18 |
| Bundler | Parcel 2 |
| Styling | Tailwind CSS 3 |
| State Management | Redux Toolkit + React Redux |
| Routing | React Router DOM v6 |
| Mock Backend (dev) | Express + Node.js |
| API Routes (prod) | Vercel Serverless Functions |

---

## Project Structure

```
swiggy-project/
├── api/                        # Vercel serverless API routes
│   └── v1/
│       ├── users.js            # GET /api/v1/users
│       └── restaurants/
│           └── [resId].js      # GET /api/v1/restaurants/:resId
├── mockbackend/
│   ├── mock.json               # Mock restaurant + menu data
│   └── server.js               # Local Express dev server (port 7000)
├── src/
│   ├── app.js                  # Root layout, router, providers
│   ├── components/
│   │   ├── Header.js           # Sticky nav with cart badge
│   │   ├── Body.js             # Restaurant listing + filters
│   │   ├── RestrurantCard.js   # Card + HOC for promoted label
│   │   ├── RestaurantMenu.js   # Menu page with hero + categories
│   │   ├── RestaurantCategories.js  # Accordion category
│   │   ├── ItemList.js         # Menu item rows with Add button
│   │   ├── Cart.js             # Cart items + bill summary
│   │   ├── About.js            # About page
│   │   ├── Contact.js          # Contact form
│   │   ├── Shimmer.js          # Loading skeleton
│   │   └── Error.js            # 404 error boundary
│   └── utils/
│       ├── appStore.js         # Redux store
│       ├── cartSlice.js        # Cart reducer (add, remove, clear)
│       ├── UserContext.js      # Global user context
│       ├── constants.js        # CDN URL, API constants
│       ├── useRestaurantMenu.js # Custom hook — fetch menu by ID
│       ├── useRestaurantList.js # Custom hook — fetch restaurant list
│       └── useOnlineStatus.js  # Custom hook — network status
├── .env                        # Local env (PARCEL_PUBLIC_API_BASE)
├── vercel.json                 # Vercel build + rewrite config
├── tailwind.config.js
└── index.html
```

---

## Getting Started (Local)

### Prerequisites
- Node.js >= 18
- npm

### Install & run
```bash
npm install
npm start
```

This starts both the mock Express backend (port 7000) and the Parcel dev server concurrently. The `.env` file points API calls to `localhost:7000`.

### Build for production
```bash
npm run build
```

Output goes to `dist/`.

---

## Deployment on Vercel

Already configured — just import and deploy.

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repository
3. `vercel.json` handles build settings automatically
4. Click **Deploy**

In production, the Express server is replaced by Vercel serverless functions at `/api/v1/`. No extra environment variables needed.

---

## Author

**Sankha Subhra Moitra** — [@sankha4567](https://github.com/sankha4567)
