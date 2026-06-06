# Amazon India Clone — React SPA

A pixel-faithful React conversion of the Amazon India clone, built with **Vite + React 18**.

---

## 📁 Project Structure

```
amazon-india-clone/
├── public/
│   └── img/                  ← ✅ PLACE YOUR IMAGES HERE
│       ├── AirConditioners.jpg
│       ├── babysafety.jpg
│       ├── baord.jpg
│       ├── bathroom.jpg
│       ├── bedsheet.jpg
│       ├── boatearbuds.jpg
│       ├── boattws.jpg
│       ├── cleaning.jpg
│       ├── cleaningaccesories.jpg
│       ├── curtains.jpg
│       ├── Cushion.jpg
│       ├── diapers.jpg
│       ├── helmets.jpg
│       ├── homedecor.jpg
│       ├── homeStorage.jpg
│       ├── hometools.jpg
│       ├── Lighting.jpg
│       ├── mechEngBook.jpg
│       ├── Microwaves.jpg
│       ├── Neckband.jpg
│       ├── neckband2.jpg
│       ├── onear.jpg
│       ├── RCcars.jpg
│       ├── RealMeNotePro.jpg
│       ├── Refrigerators.jpg
│       ├── ride.jpg
│       ├── tyre.jpg
│       ├── vaccumcleaner.jpg
│       ├── vases.jpg
│       ├── wallpapers.jpg
│       ├── WashingMachine.jpg
│       └── WirelessNeckband.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── Row1.jsx
│   │   ├── Row2.jsx
│   │   ├── Footer.jsx
│   │   └── Toast.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── useToast.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🖼️ Adding Your Images

Copy all your `.jpg` images into the **`public/img/`** folder.

> **Why `public/img/`?**  
> Vite serves the `public/` folder as-is at the root URL. Images placed there are referenced as `img/filename.jpg` in the code — no import needed. This exactly mirrors how the original HTML worked with a local `img/` folder.

The filenames are **case-sensitive** — make sure they match exactly (e.g. `AirConditioners.jpg`, not `airconditioners.jpg`).

---

## 🚀 Setup & Run

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Steps

**1. Install dependencies**
```bash
npm install
```

**2. Add your images**  
Copy all `.jpg` files from your `img/` folder into `public/img/` (see above).

**3. Start the dev server**
```bash
npm run dev
```
Open your browser at **http://localhost:5173**

### Build for production
```bash
npm run build
```
The output will be in the `dist/` folder — ready to deploy on any static host (Netlify, Vercel, GitHub Pages, etc.).

### Preview the production build locally
```bash
npm run preview
```

---

## 🧩 Component Overview

| File | What it does |
|---|---|
| `App.jsx` | Root component — wires everything together, holds cart state |
| `Navbar.jsx` | Top nav bar + search + secondary nav strip |
| `HeroBanner.jsx` | Auto-sliding carousel (3 slides, 5s interval) with manual arrows |
| `Row1.jsx` | First row of 4 deal panels (Continue Shopping, Appliances, Revamp Home, Headphones) |
| `Row2.jsx` | Second row of 4 panels (Home Essentials, Amazon Brands, Automotive, Baby Care) |
| `Footer.jsx` | Back-to-top bar + footer link columns + copyright strip |
| `Toast.jsx` | Slide-up notification toast |
| `useToast.js` | Custom hook managing toast visibility and auto-dismiss |
| `index.css` | All styles — identical CSS variables and classes from the original HTML |

---

## ✏️ Customisation Tips

- **Change delivery location text** → `src/components/Navbar.jsx`, line with `Greater N... 201310`
- **Add cart functionality** → lift `cartCount` state in `App.jsx` and pass a setter down to product panels
- **Add more hero slides** → push to the `slides` array in `HeroBanner.jsx`
- **Add a new product panel** → create a new `<div className="row2-panel">` block in `Row2.jsx`
