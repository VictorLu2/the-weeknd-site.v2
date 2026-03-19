# The Weeknd Fan Site v2

A multi-page fan website for **The Weeknd**, built with vanilla HTML, CSS, and JavaScript using Bootstrap 5. The site features a hero video background, album music video links, tour dates, and a fully functional shopping cart.

---

## 📸 Preview

Home
<img width="1906" height="1045" alt="Screenshot 2026-03-19 at 13 51 34" src="https://github.com/user-attachments/assets/67d805f4-9e9f-43ae-a5cd-deaf55cf71b9" />

Listen
<img width="1907" height="1033" alt="Screenshot 2026-03-19 at 13 53 33" src="https://github.com/user-attachments/assets/5f7454be-acd9-4116-8859-17e1898565fc" />

Tour
<img width="1920" height="1044" alt="Screenshot 2026-03-19 at 13 57 49" src="https://github.com/user-attachments/assets/5e4ba4b8-cbb3-4fe4-b426-f68c0faa718f" />

Shop
<img width="1917" height="1043" alt="Screenshot 2026-03-19 at 13 58 22" src="https://github.com/user-attachments/assets/30b08ce7-0a1d-42dc-bbee-11bc66df9e68" />

---

## 🗂️ Project Structure

```
the-weeknd-site.v2-main/
│
├── index.html                  # Entry point / Home page
│
├── TheWeeknd/
│   ├── TheWeeknd.html          # Main landing page (mirrors index)
│   └── TheWeeknd.css           # Shared styles (navbar, hero, about)
│
├── Listen/
│   ├── Listen.html             # Album & music video page
│   └── Listen.css              # Listen page styles
│
├── Tour/
│   ├── Tour.html               # Tour dates page
│   └── Tour.css                # Tour page styles
│
├── Shop/
│   ├── Shop.html               # Merchandise shop page
│   ├── Shop.css                # Shop page styles
│   └── Shop.js                 # Shopping cart logic
│
└── assets/
    ├── bg.mp4                          # Hero background video
    ├── The_Weeknd_-_After_Hours.png    # Album cover
    ├── The_Weeknd_-_Beauty_Behind_the_Madness.png
    ├── The_Weeknd_-_Dawn_FM.png
    ├── The_Weeknd_-_Hurry_Up_Tomorrow.png
    ├── The_Weeknd_-_Kiss_Land.png
    ├── The_Weeknd_-_Starboy.png
    ├── hero_hoodie_front.webp          # Merch images
    ├── hero_tee.webp
    ├── hut-score-vinyl-disc-V2.webp
    ├── trucker_front.webp
    ├── white_tee.webp
    └── zip_up_front.webp
```

---

## ✨ Features

### 🏠 Home / TheWeeknd
- Full-screen looping background video (`bg.mp4`)
- Artist biography section with styled heading
- Responsive navbar with links to all pages

### 🎵 Listen
- Albums listed with Bootstrap accordion components
- Each album displays its cover art
- Songs link directly to their official YouTube music videos
- Covers albums from **Kiss Land (2013)** to **Hurry Up Tomorrow (2025)**

### 🗓️ Tour
- Tour dates displayed in a dark-themed table
- Shows venue, city, and a "Buy Now" or "Sold Out" button per event
- Sections for **2024** and **2025** tour dates

### 🛍️ Shop
- Product grid dynamically rendered from a JavaScript data array
- Offcanvas sliding cart panel (Bootstrap)
- Cart supports:
  - ➕ Add to cart
  - ➕ / ➖ Increase or decrease quantity
  - 🗑️ Remove individual items
  - 💵 Live subtotal calculation

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Custom styling per page |
| JavaScript (Vanilla) | Shopping cart logic |
| [Bootstrap 5.3](https://getbootstrap.com/) | Layout, navbar, accordion, offcanvas |

> No build tools or package managers required — runs entirely in the browser.

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/the-weeknd-site.git
   cd the-weeknd-site
   ```

2. **Open in browser**

   Simply open `index.html` in your browser directly, or use a local server for best results:

   ```bash
   # Using VS Code Live Server extension (recommended)
   # Right-click index.html → "Open with Live Server"

   # Or using Python
   python -m http.server 8080
   ```

3. **Navigate to** `http://localhost:8080`

---

## 📌 Notes

- All album and tour data is hardcoded in HTML/JS — no backend or database required.
- Music video links point to official YouTube videos.
- The shopping cart does **not** persist between page refreshes (no localStorage or backend).
- Asset paths use relative URLs, so keep the folder structure intact.

---

## 📄 License

This project is for **educational and fan purposes only**.  
All music, images, and branding belong to their respective rights holders.
