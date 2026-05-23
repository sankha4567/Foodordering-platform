# Swiggy Clone — Namaste React

A food ordering web app built from scratch as part of the **Namaste React** course by Akshay Saini. It replicates core Swiggy features including restaurant listing, menu browsing, cart management, and more.

---

## Features

- Browse restaurants with live search and top-rated filter
- View restaurant menus with expandable categories
- Add / remove items from cart using Redux
- Responsive UI with Tailwind CSS
- Shimmer loading skeleton while data fetches
- Online / offline status detection
- Client-side routing with React Router v6
- Higher-Order Component (HOC) for promoted restaurant labels
- Context API for global user info

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18 |
| Bundler | Parcel 2 |
| Styling | Tailwind CSS 3 |
| State Management | Redux Toolkit + React Redux |
| Routing | React Router DOM v6 |
| Mock Backend | Express + Node.js |
| API Routes (prod) | Vercel Serverless Functions |

---

## Project Structure

```
swiggy-project/
├── api/                      # Vercel serverless API routes
│   └── v1/
│       ├── users.js          # GET /api/v1/users
│       └── restaurants/
│           └── [resId].js    # GET /api/v1/restaurants/:resId
├── mockbackend/
│   ├── mock.json             # Mock restaurant data
│   └── server.js            # Local Express dev server (port 7000)
├── src/
│   ├── app.js               # Root component + router setup
│   ├── components/          # UI components
│   └── utils/               # Custom hooks, Redux store, constants
├── index.html
├── tailwind.config.js
└── vercel.json              # Vercel deployment config
```

---

## Getting Started (Local)

### Prerequisites
- Node.js >= 18
- npm

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm start
```

This starts both the mock backend (port 7000) and the Parcel dev server concurrently.

### Build for production
```bash
npm run build
```

Output goes to the `dist/` folder.

---

## Deployment on Vercel

This project is configured for one-click Vercel deployment.

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-reads `vercel.json` — no manual config needed
4. Click **Deploy**

The mock backend is exposed as Vercel serverless functions under `/api/v1/`.

---

## Key Concepts Covered

- `useState`, `useEffect`, custom hooks
- `useContext` + Context API
- Redux Toolkit: store, slices, dispatch, selectors
- React Router: `<Link>`, `useParams`, nested routes
- Higher-Order Components (HOC)
- Conditional rendering & shimmer UI
- Client-side vs server-side routing
- Lazy loading with `React.lazy` + `Suspense`

---

## Author

**Sankha Subhra Moitra** — [@sankha4567](https://github.com/sankha4567)
