# 🏃 Track Star

**Find your perfect running playlist — matched to your pace.**

Track Star is a catalog app that converts your target running pace into a matching beats-per-minute (BPM) range, then filters a curated song library so you can build a playlist that keeps your cadence consistent, mile after mile.

🔗 **Live Demo:** [sseo123.github.io/track_star](https://sseo123.github.io/track_star/)
📦 **Repo:** [github.com/sseo123/track_star](https://github.com/sseo123/track_star)

---

## 📖 Overview

Runners often try to match their footstrike to the beat of a song to keep a steady cadence — but finding songs at the right tempo is tedious. Track Star solves that by letting you enter a target pace (minutes:seconds per mile) and instantly surfacing songs from a 40-track catalog whose BPM lines up with that pace, using a simple pace-to-BPM conversion formula. From there, you can search, filter, and build a custom playlist, with live stats (song count, total duration, and average BPM) updating as you go.

This project was originally built as the Stage 2 Data Catalog Project for Snap Engineering Academy, starting from their provided starter template and built out from there.

---

## ✨ Features

- **🎯 Pace → BPM Converter** — Enter a pace between 6:00 and 12:00 min/mile and get the ideal music tempo to match your cadence, with input validation for out-of-range or invalid entries.
- **🎚️ BPM Filtering** — Instantly filters the 40-song catalog down to tracks within a ±5 BPM window of your target tempo.
- **🔍 Live Search** — Search the catalog by song title or artist name in real time.
- **➕➖ Playlist Builder** — Add or remove songs from your personal playlist with a single click; songs move between the catalog and playlist views automatically so nothing is ever listed twice.
- **📊 Playlist Stats** — See your playlist's total song count, combined duration, and average BPM update live as you build it.

---

## 🖥️ Tech Stack

Built entirely with vanilla web technologies — no frameworks or libraries — to focus on core JavaScript fundamentals:

- **HTML5** — semantic structure and accessibility attributes
- **CSS3** — custom properties, responsive grid/flex layouts, keyframe animations
- **JavaScript (ES6+)** — array/object data modeling, DOM manipulation, event handling, and state management

---

## 📁 Project Structure

```
track_star/
├── index.html      # Page structure and layout
├── scripts.js       # App logic: data catalog, BPM math, search, and playlist state
├── style.css        # Styling, animations, and responsive design
└── README.md
```

---

## 🚀 Getting Started

Since this is a static site with no build step, running it locally is simple:

1. **Clone the repo**
   ```bash
   git clone https://github.com/sseo123/track_star.git
   cd track_star
   ```
2. **Open `index.html`** directly in your browser (double-click it, or use an extension like VS Code's Live Server).

No installation, dependencies, or API keys required.

---

## 🧠 What I Learned

This project was my first deep dive into vanilla JavaScript state management — keeping the "available songs" list and the "playlist" list in sync without a framework taught me a lot about treating data as a single source of truth rather than manipulating the DOM directly. Building the pace-to-BPM converter meant translating a real running formula into validated, user-proof input handling, and the search/filter features pushed me to think carefully about how UI state should respond to changing data.

Beyond the code itself, this was also my introduction to collaborative software development: forking and cloning a starter repository, building on top of someone else's codebase, and opening/reviewing GitHub issues and pull requests with peers. Reading feedback from others and deciding how to act on it taught me as much about writing clear, maintainable code as the JavaScript itself did.

---

## 🙏 Acknowledgments

- Built on top of the [Snap Engineering Academy Stage 2 Data Catalog starter code](https://github.com/Snap-Engineering-Academy-2023).
- Song BPM data sourced from [songbpm.com](https://songbpm.com/).
- Album art sourced from public artist/label imagery.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).