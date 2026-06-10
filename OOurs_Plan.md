# 🦆 Ruby's Duckie Job Tracker — Our Plan
> Last updated: 2026-06-10 (Session 2)

---

## ✅ What We Built Today

### 1. Premium Monetization System (Update_ver2.txt)
- **Free Tier Limit** — Max 5 job entries. On the 6th submit → Upgrade Modal fires.
- **Upgrade Modal** — Beautiful pop-up with:
  - Crown icon + heading "Upgrade to Ruby's Premium"
  - Value proposition list (unlimited rows, analytics, export/import, themes)
  - Real **PromptPay QR code** image from `rubyduckie.com`
  - **LINE button** (green, official LINE icon) → links to `https://lin.ee/5KVFw7u`
  - Instructions: pay → send pay slip via LINE → receive License Key
  - License Key input (placeholder: "Enter your License Key here" — no hints)
  - "Activate Premium Workspace" button
- **5 Valid License Keys**: `AMRUBYAM`, `DUCKIE`, `RUBYBEDEV`, `PERUBYE`, `RUBY_BI`
- **Analytics Dashboard Lock** — Blurred overlay with license key input if not premium
- **Export/Import JSON Lock** — Opens upgrade modal if not premium
- **Theme Switcher Lock** — 5 themes (Classic/Mint/Ocean/Rose/Sunset), premium only
- **Persistent Premium State** — Saved in localStorage key `is_premium_user_v1`

---

### 2. Add New Application Modal — UI Upgrade
- **Work Type** → replaced dropdown with **pill buttons** (yellow active state):
  - 🏢 Full-time | 🔀 Hybrid | 🏠 Remote
- **Employment Type** → replaced dropdown with **pill buttons**:
  - 💼 Permanent | 📋 Contract | 🧑‍💻 Freelance | 🎓 Internship
- Hidden input stores the selected value for both fields
- `selectPill()` + `restorePill()` JS helpers manage pill state
- Pills restore correctly when editing an existing application

---

### 3. Advanced Registry (All Applications Table)

#### Filter Bar — now has 4 dropdowns:
| Filter | Options |
|---|---|
| All Statuses | Applied, Interviewing, Offer, Rejected, Wishlist |
| All Work Types | Full-time, Hybrid, Remote |
| All Emp. Types | Permanent, Contract, Freelance, Internship |
| All Cities | Bangkok, Nonthaburi, Chonburi, Chiang Mai, Pathum Thani, Samut Prakan, Samut Sakhon |

#### Table Columns — updated to match Add modal fields:
| Column | Style |
|---|---|
| Company & Role | Bold name + muted role subtitle |
| Date Applied | Small muted text |
| City | Semibold |
| Work Type | 🔵 Blue pill badge (NEW) |
| Emp. Type | 🟣 Purple pill badge (NEW) |
| Salary (THB) | Right-aligned bold |
| Status | Color-coded rounded badge |
| Actions | Edit + Delete icon buttons |

---

### 4. Deployment
- **Platform**: Cloudflare Pages
- **Repo**: https://github.com/PenpichaCode/Job-Application-Tracker
- **Branch**: main (auto-deploys on every push)
- **Entry point**: index.html (landing page) → dashboard.html (app)
- **Build command**: (empty — static site, no build step)

---

## 🗂️ File Structure
```
jobs-tracker-app/
├── index.html          ← Landing page (Cooper Black hero font)
├── start.css           ← Landing page styles
├── start.js            ← Redirects to dashboard.html
├── dashboard.html      ← Main app (Kanban, Table, Analytics)
├── index.css           ← Dashboard styles + theme variables + pill-btn styles
├── app.js              ← All app logic (data, filters, premium, charts)
├── Update_ver2.txt     ← Original monetization blueprint (Phase 1–4)
├── OOurs_Plan.md       ← This file!
└── assets/images/
    ├── image_f13c58.png    ← Sidebar duck logo
    └── start-page.png      ← Landing page nav logo
```

---

## 🔑 Key Implementation Details

### localStorage Keys
| Key | Purpose |
|---|---|
| `careers_tracker_db_v1` | All job applications (JSON array) |
| `is_premium_user_v1` | 'true' if premium unlocked |
| `has_seeded_demo_db_v1` | Prevents re-seeding demo data on reload |
| `app_theme_v1` | Current theme name |

### JS Functions Added This Session
- `selectPill(groupId, hiddenInputId, value, btn)` — pill button click handler
- `restorePill(groupId, hiddenInputId, value)` — restores pill on edit
- `handleExportClick()` — premium gate for export
- `handleImportLabelClick(event)` — premium gate for import
- `handleThemeClick(themeId)` — premium gate for theme
- `activateLicense(key)` — validates key and unlocks premium
- `updatePremiumUI()` — shows/hides lock overlays
- `applyTableFilters()` — now filters by status, workType, employeeType, city

---

## 🚀 Possible Next Steps (Tomorrow Ideas)
- [ ] Test all 5 license keys end-to-end on live Cloudflare site
- [ ] Add Notes popup/modal to read full notes from the table row
- [ ] Salary range chart or trend graph on Analytics (premium feature)
- [ ] "Applied Today" quick counter badge on header
- [ ] Search highlight — highlight matched text in table results
- [ ] Mobile responsiveness review on dashboard
- [ ] Review/trim demo database (currently 100+ Thai company entries)
- [ ] Drag-and-drop on Kanban — verify it works correctly

---

> 💛 Great session today! Everything is live on Cloudflare Pages.
