# SWAT4HCLS26_app

Mobile-first Progressive Web App (PWA) for attendees of **SWAT4HCLS 2026 Amsterdam** (March 23–26, 2026, Amsterdam UMC).

Live at: **https://SWAT4HCLS.github.io/SWAT4HCLS26_app/**

---

## Features

| Tab | What it does |
|-----|-------------|
| **Home** | Countdown, programme overview, quick links, sponsors |
| **Programme** | Day-by-day schedule; bookmark sessions; take per-session notes |
| **Talks** | Browse & search all 17+ accepted papers, short papers, and demos |
| **Venue** | Map, transport directions, ticket prices, hotel list |
| **Me** | Shareable profile card, GitHub Discussions intro, saved contacts, export notes |

- **Installable** — works as a standalone app on iOS and Android (Add to Home Screen)
- **Offline** — full offline support via Service Worker; data refreshes when online
- **No server required** — pure static files, hosted on GitHub Pages
- **Privacy-first** — all user data (notes, bookmarks, profile) stays on the device

---

## Updating the programme

Edit **`data/program.json`** and push. That's it.

The service worker uses network-first for JSON, so online attendees get fresh data immediately. Session paper assignments, room details, and chair names can be added as they are confirmed.

---

## Structure

```
SWAT4HCLS26_app/
├── index.html          Single-file PWA (app engine — no framework needed)
├── manifest.json       PWA manifest
├── sw.js               Service worker (offline support)
├── data/
│   └── program.json    All conference content — edit this to update
└── icons/
    ├── icon-192.png    PWA icon (192×192)
    └── icon-512.png    PWA icon (512×512)
```

---

## Deployment (GitHub Pages)

See [GITHUB_SETUP.md](GITHUB_SETUP.md) for full step-by-step instructions.

Short version:
1. Create repo `SWAT4HCLS/SWAT4HCLS26_app`
2. Push these files to `main`
3. Settings → Pages → Source: Deploy from branch `main` / `/ (root)`
4. App available at `https://SWAT4HCLS.github.io/SWAT4HCLS26_app/`

---

## Reusing for future editions

This repo is based on **[swat4hcls_app_template](https://github.com/SWAT4HCLS/swat4hcls_app_template)**.

For SWAT4HCLS 2027:
1. Click **Use this template** on the template repo → create `SWAT4HCLS27_app`
2. Update `data/program.json` with the new year's data
3. Update `manifest.json` name/theme
4. Update `sw.js` cache name (`swat4hcls27-v1`)
5. Enable GitHub Pages
