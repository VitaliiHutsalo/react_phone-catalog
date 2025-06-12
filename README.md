# 🛒 Product Catalog SPA

A modern product catalog built with **React + TypeScript**, following the **Atomic Design** methodology.
Deployed as a frontend-only app using local `.json` data.

🔗 **Live Demo**: [https://produtcatalog.netlify.app/](https://produtcatalog.netlify.app/)

---

## 🧩 Technologies

- ⚛️ **React** + **TypeScript**
- 🎨 **SCSS Modules**
- 🚦 **React Router**
- 🧠 **Redux toolkit** + **Local storage** (Cart & Favorites)
- ✅ **ESLint**, **Prettier**, **Husky** (for code quality)

---

## 🧱 Architecture (Atomic Design)


---

## 📱 Catalog Pages

**Routes**:
`/phones` | `/tablets` | `/accessories`

- 📄 Sort by: `Newest`, `Alphabetically`, `Cheapest`
- 🔢 Pagination: `4`, `8`, `16`, or `All` items per page
- 📂 Data comes from static `.json` files

---

## 🔍 Search Functionality

- 🔎 Real-time **search by product name**
- ⏳ Includes **debounce** for performance
- 🔗 Search query stored in the URL: `?query=value`
- 😢 "No results" message if query fails

---

## ❤️ Favorites

- ❤️ Add/remove products via heart icon
- 🧠 State is **persisted in localStorage**
- 🔢 Favorites count shown in the header

---

## 🛒 Shopping Cart

- ➕ Add items from `ProductCard` or `ProductDetails`
- ➖ Modify quantity or ❌ remove items
- 🧾 Simulated **checkout modal** (confirmation only)
- 💾 Cart saved in **localStorage**
- 📦 Totals auto-calculated (quantity + price)

---

## 🏠 Home Page Features

- 🖼️ **Image Slider** (autoplays every 5s)
- 🔥 **Hot Prices** — discounted products (by biggest discount)
- 🆕 **Brand New** — no-discount products, sorted by price
- 🧭 **Shop by Category** — links to phones, tablets, accessories

---

## 📄 Product Details Page

📍 Route: `/product/:productId`

- 🧭 **Breadcrumbs**: Home / Category / Product
- 🖼️ Image gallery
- 📝 Description & selected tech specs
- 🎲 Random “You may also like” section
- 🔙 **Back button** simulates browser history
- ❗ "Product not found" message for invalid ID

---

## 🧭 Navigation & UI

- 📌 Sticky header (logo + nav + cart + favorites)
- ⬆️ Scroll-to-top button with smooth behavior
- 🚫 `NotFoundPage` for unknown URLs
- 🧊 All **hover effects** are animated smoothly
- 🔍 Product images scale **+10%** on hover

---

## 🌐 Deployment

- 🚀 Hosted on **Netlify**
- 🔗 [https://produtcatalog.netlify.app/](https://produtcatalog.netlify.app/)
- 🧪 Fully frontend-only (no backend, no DB)

---
