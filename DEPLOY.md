# Deploying to GitHub Pages + jsonbin.io

This hosts the **iPhone** vitamin tracker (`ui_kits/vitamin-calendar/iphone.html`)
as a static site, with data saved to jsonbin.io. No server needed.

## 1 · Set up jsonbin (one time)
1. Sign in at <https://jsonbin.io>.
2. **Create a bin** with the initial content exactly:  `{}`  — copy its **Bin ID**.
3. **API Keys → create an Access Key** with **Bin/Read + Bin/Update** enabled.
   Copy the key. (Do **not** use your Master Key — this code is public.)

## 2 · Fill in the config
Edit `ui_kits/vitamin-calendar/config.js`:
```js
window.VC_CONFIG = {
  binId: "PUT_YOUR_BIN_ID_HERE",
  key:   "PUT_YOUR_ACCESS_KEY_HERE",
  keyHeader: "X-Access-Key",
  pollSeconds: 30,
};
```
Leave the fields blank to run **local-only** (toggles work but nothing is saved).

## 3 · Push & enable Pages
1. Upload the **whole project** to a GitHub repo, keeping the folder structure
   (the app references `styles.css` / `_ds_bundle.js` by relative path, so the
   files must stay where they are). **Make sure the `.nojekyll` file at the repo
   root is included** (see below) — without it the app shows a blank screen.
2. Repo **Settings → Pages → Deploy from branch → `main` / root**.
3. Open `https://<you>.github.io/<repo>/` — the root redirects to the phone app.
   (Direct URL: `…/ui_kits/vitamin-calendar/iphone.html`.)

## ⚠ Blank screen? The `.nojekyll` file
GitHub Pages runs Jekyll by default, and **Jekyll does not publish files that
start with an underscore** — so `_ds_bundle.js` (the component library this app
needs) returns 404 and the page renders blank. The fix is an **empty file named
`.nojekyll` at the repo root**. This project includes one, but note:
- The GitHub website's drag-and-drop uploader often **hides/skips dotfiles**. If
  you uploaded that way, create it manually: repo → **Add file → Create new
  file** → name it exactly `.nojekyll` → Commit. (Leave it empty.)
- If you use `git`, run `git add .nojekyll` (git tracks dotfiles fine).
- After it's committed, wait ~1 min for Pages to rebuild, then hard-refresh.

## How saving works
- Each toggle updates the screen immediately, then writes the whole tracker
  object to your bin (debounced ~0.6s). The header badge shows **불러오는 중**
  while saving, **동기화 완료** when done, **동기화 실패** on error.
- Every `pollSeconds` it re-reads the bin, so a change made on the other phone
  shows up here within ~30s.
- Data shape in the bin: `{ "2026-07-14": { "junghwa": true, "haein": false }, … }`.
- Weekends and Ontario statutory holidays are pause days — never saved or counted.

## Notes
- Anyone who views the page source can see the Access Key and thus read/write
  the bin. For a private two-person calendar that's usually fine; if it matters,
  rotate the key or move to an authenticated backend.
- jsonbin's free tier has monthly request limits; the 30s poll is well within them
  for personal use. Increase `pollSeconds` to cut requests further.
