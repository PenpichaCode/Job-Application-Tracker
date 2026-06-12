# 🦆 Ruby's Duckie Job Tracker — Our Plan
> Last updated: 2026-06-11 (Session 3)

---

## ✅ What We Built Today (Session 3 - June 11, 2026)

### 1. First-Time Demo & 10-Row Free Limit
- **Demo Play Mode**: First-time visitors can play with pre-loaded demo data with all features unlocked.
- **Reset & Live Mode Limit**: If the user resets the workspace and starts entering their own jobs (Live Mode), they can enter up to **10 rows** for free.
- **Analytics Hub Locked Overlay**: Once they hit the 10-row limit:
  - The Analytics tab is covered by a sleek, blurred lock overlay.
  - A close button was added to the lock overlay so users can dismiss it if they wish to view underlying details but features remain gated.
  - An inline license key input allows quick activation.
  - The link *"Don't have a key? Buy Premium →"* opens the Upgrade Modal.

### 2. Premium Upgrade Modal — Professional Redesign
- **Wide Rectangle Layout**: Redesigned to be a sleek, compact horizontal card (`max-w-xl`) instead of a tall vertical box.
- **Two-Column Structure**:
  - **Left Side**: Title with crown icon, clear value propositions (unlimited rows, analytics, export/import, premium themes), and license key input with activation button.
  - **Right Side**: Gray panel containing the PromptPay QR code, price (299 THB), 1-2-3 scan steps, and the official green **LINE** button for sending slips.
  - Separated by a clean vertical divider border.

### 3. Session Restore / Cache Cleared Modal
- Added a warning modal for premium users whose browser cache was cleared.
- Prompts them to re-enter their license key to restore status, and reminds them to import their JSON backup to restore application data.

### 4. Bugs Fixed
- **Upgrade Modal Non-responsiveness**: Fixed a layout bug where the **Welcome Modal** had missing closing `</div>` tags. This was nesting the Upgrade Modal inside the welcome modal's hidden container, causing the Upgrade Modal to be invisible even when activated.
- Cleaned up stray duplicate closing divs in `dashboard.html` around the modal section.

---

## 📅 Previously Built (Session 1 & 2)

### 1. Premium Monetization System (Update_ver2.txt)
- **5 Valid License Keys**: `AMRUBYAM`, `DUCKIE`, `RUBYBEDEV`, `PERUBYE`, `RUBY_BI`
- **Gated Features**: Theme Switcher (Classic, Mint, Ocean, Rose, Sunset), Export/Import JSON data backup, and Analytics.
- **Persistent Premium State**: Saved in localStorage key `is_premium_user_v1`.

### 2. Add New Application Modal — UI Upgrade
- **Work Type & Employment Type**: Replaced standard dropdowns with modern, yellow active-state **pill buttons** (🏢 Full-time | 🔀 Hybrid | 🏠 Remote and 💼 Permanent | 📋 Contract | 🧑‍💻 Freelance | 🎓 Internship).
- Correctly restores selected pill states when editing an application.

### 3. Advanced Registry (All Applications Table)
- **Filter Bar**: 4 dropdowns filtering by Status, Work Type, Emp. Type, and City (Bangkok, Nonthaburi, Chonburi, Chiang Mai, Pathum Thani, Samut Prakan, Samut Sakhon).
- **Table Columns**: Upgraded to include Date Applied, City, Work Type badge, Emp. Type badge, Salary (THB), Status badge, and Edit/Delete controls.

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
├── OOurs_Plan.md       ← This plan file!
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

### JS Functions Added/Modified
- `selectPill()` & `restorePill()` — Manage custom pill components.
- `openUpgradeModal()` & `closeUpgradeModal()` — Open/close the Premium modal.
- `activateLicense(key)` / `activateLicenseFromDashboard()` / `activateLicenseFromCacheModal()` — Validate key inputs and unlock premium.
- `updatePremiumUI()` — Controls overlays, lock badges, and gates.
- `applyTableFilters()` — Filter logic for the applications database.

---

## 🚀 Future Ideas & Next Steps
- [ ] Test all 5 license keys end-to-end on live Cloudflare site.
- [ ] Add a Notes popup/modal to read full notes from the table row.
- [ ] Salary range chart or trend graph on Analytics (premium feature).
- [ ] "Applied Today" quick counter badge on header.
- [ ] Search highlight — highlight matched text in table results.
- [ ] Mobile responsiveness review on dashboard.
- [ ] Drag-and-drop on Kanban — verify it works correctly.

---
