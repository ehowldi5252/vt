# 💊 Vitamin Calendar — Design System

A small, complete design system extracted from **비타민 체크 달력** ("Vitamin Check
Calendar") — a personal, two-person daily-vitamin tracker for **정화 (Junghwa)**
and **해인 (Haein)**. It is a soft, warm, pastel calendar app: each weekday has two
checkboxes (one per person), and cells tint themselves matcha green, peach, or a
matcha/peach split as people check in.

The aesthetic is **gentle and domestic** — warm-paper background, hairline
borders, rounded friendly numerals, near-flat depth, and small "pop" animations
on interaction. Two people, two hues, one shared calendar.

## Source

- **GitHub:** `ehowldi5252/VitaminTracker` — <https://github.com/ehowldi5252/VitaminTracker>
  (private). A single-file front-end (`index.html`) backed by Netlify Functions +
  Netlify Blobs. Explore this repo for the original markup, calendar logic, and
  the canonical color/spacing values this system is built from.

There was no Figma file, brand kit, or image-asset folder — the entire system is
derived from the app's inline CSS and markup.

---

## Content fundamentals

**Language:** Korean (`lang="ko"`), warm and personal — this is an app two people
share, not a product for strangers.

- **Tone:** affectionate, low-pressure, encouraging. It tracks streaks and rates
  but never scolds; a missed day gets a soft peach dot, not a red warning.
- **Voice:** names people directly — **정화**, **해인** — rather than "User 1 / 2".
  Copy is about *them*, e.g. "정화 & 해인의 매일 비타민" (Junghwa & Haein's daily vitamins).
- **Casing / form:** plain noun phrases and labels, no terminal punctuation.
  Korean is unspaced/loosely spaced; Latin numerals stay Arabic.
- **Examples of real copy:**
  - Title: `비타민 체크 달력` · Subtitle: `정화 & 해인의 매일 비타민`
  - Stats: `복용 완료` (doses taken), `연속 복용일` (streak days), `복용률` (dose rate)
  - Status: `불러오는 중` (loading), `동기화 완료` (synced), `저장 중` (saving), `저장 실패` (save failed)
  - Footer: `✦ Netlify Blobs 저장 · 30초마다 자동 동기화 ✦`
- **Emoji:** used sparingly and intentionally — 💊 as the logo glyph, ⚠️ in error
  toasts, ✦ as a decorative footer flourish. Not decorative spam.
- **Numbers:** Arabic numerals, set in the rounded display face; dates are
  `YYYY년 M월`, day-of-week in single Hangul (`일 월 화 수 목 금 토`).

---

## Visual foundations

**Color** — a soft, low-saturation pastel palette built around two people. The
default theme is **Matcha & Peach**; five alternates (Lavender & Rose, Sage &
Amber, Ocean & Teal, Terracotta & Olive, Indigo & Slate) ship as switchable
themes (see `ui_kits/vitamin-calendar/themes.js`).
- **정화 = matcha green** (`--accent #BACD92`) with light/mid/deep tints; **해인 =
  peach** (`--accent-2 #F5DAD2`) with light/mid/deep tints. Because the accents
  are light, each hue also has a **`-deep`** value (`#5f7a35` / `#c06b50`) used for
  text on white (numerals, labels) and an **`--on-accent`** ink (`#2c3416` /
  `#5e342a`) used for text sitting on a filled accent (buttons, checked toggles).
- Surfaces are soft off-white paper: `--bg #f8f8f4`, cards `#fff`, sunken
  `#f1f2ec`, weekends a faint sage `#f2f4ee`.
- Text is a warm near-black (`#29271c`) softening through muted (`#8a8a78`) to
  faint (`#c3c3b4`). Borders are a single hairline `#e8e7dc`.
- Status is encoded by small dots: green `#6dbf8a` ok, amber `#e3b552` loading,
  peach `#c06b50` error/missed.
- **Imagery vibe:** there is no photography or illustration. Color *is* the
  imagery — pastel tints fill completed cells, and a 135° matcha→peach gradient
  marks a day both people completed.

**Type** — two faces:
- **Gmarket Sans** (display): rounded, friendly, bold — used for the title, month
  label, and all big numerals/stats.
- **Noto Sans KR** (body): clean Hangul + Latin for everything else.
- The scale is small and dense (10–22px) because the calendar packs two checkbox
  rows into every weekday cell. In-cell labels go as small as 10px.

**Spacing & layout** — a 4-based scale (4 / 6 / 10 / 12 / 16 / 20 / 28). The whole
app is a single centered column, `max-width: 720px`. The month is a strict 7-column
CSS grid with 4px gaps; cells are min-height 90px.

**Radius** — soft but not pill-everything: 12px cards, 8px cells/buttons, 6px
chips, 99px pills (tags, tracks, the sync badge, nav-button is the exception at 8px).

**Borders, depth & shadows** — the app is **near-flat**: 1px hairline borders carry
nearly all structure. "Today" is a 1.5px accent ring. Shadows are barely-there and
tinted toward the matcha accent, reserved for the rare elevated card and the press
"pop". No heavy drop shadows, no glows.

**Backgrounds** — flat warm color only. No gradients on backgrounds; the *one*
gradient in the system is the 135° two-tone fill of a both-completed cell and the
progress-bar fills (mid→full hue, horizontal).

**Motion** — gentle and short. A `vc-pop` scale bump (1 → 1.06 → 1) on check, a
`vc-pulse` opacity blink on the loading dot, and a 0.5s ease-out width transition
on progress bars. Easing is `cubic-bezier(.4,0,.2,1)`. Durations 0.15 / 0.22 / 0.5s.
No bounces, no parallax, nothing infinite except the loading pulse.

**Hover states** — soft tint, not darkening: ghost/default buttons fill with the
accent-light tint and pick up the accent border + text color on hover; nav buttons
go from muted to accent. Solid buttons dim slightly (`brightness .94`).

**Press states** — a small `scale(0.96)` shrink; checks fire the `vc-pop`.

**Transparency & blur** — none. No frosted glass, no scrims, no backdrop blur.
Everything is opaque flat color.

**Corner / card recipe** — white surface, 1px `--border` hairline, 12px radius,
generous interior padding (≈1.25rem), no shadow by default. That single card recipe
is reused for stats, progress, and the calendar.

---

## Iconography

This product has essentially **no icon system** — and that's the point.

- **Glyphs are emoji + unicode characters.** The logo is 💊 set inside a matcha
  rounded square. Month navigation uses unicode chevrons `‹` `›` (single
  angle-quotation marks). The footer flourish is `✦`. Errors use ⚠️.
- **No icon font, no SVG sprite, no PNG icons** ship with the app — there were
  none in the source repo to copy in.
- **No Lucide/Heroicons/etc.** are used. If a consuming design needs line icons,
  pick a soft, rounded, thin-stroke set (e.g. Lucide at ~1.5px) to match the
  rounded, gentle character of Gmarket Sans — and flag it as an addition, since the
  source app has no such system.
- Status and completion are communicated by **colored dots and tints**, not icons:
  the legend dots, the sync dot, the missed-day dot, and the cell tints all carry
  meaning through color + shape rather than iconography.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this); `@import`s the tokens.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible front matter for use in Claude Code.

**`tokens/`** — CSS custom properties
- `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css`

**`components/`** — reusable React primitives (namespace `window.VitaminCalendarDesignSystem_00e06a`)
- `core/` — `Button`, `NameTag`, `Card`, `ProgressBar`, `SyncBadge`
- `calendar/` — `VitaminCheck`, `StatGroup`, `CalendarCell`

**`ui_kits/vitamin-calendar/`** — full interactive recreation of the app
- `index.html` (desktop month-grid mount) · `App.jsx`
- `iphone.html` (iPhone Safari mount, day-list, live theme Tweaks) · `MobileApp.jsx`
- `themes.js` — six switchable color themes
- `holidays.js` — Ontario (Canada) statutory holidays, computed per year and
  treated as "pause" days (like weekends): no vitamins expected, excluded from
  dose-rate and streak math, rendered with a 🍁 + holiday name. Swap the
  `ontarioHolidays(year)` table for another region to retarget the calendar.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown
in the Design System tab.

---

## Font substitution note

**Gmarket Sans** is not on Google Fonts; it is loaded from a community webfont CDN
(`webfontworld/gmarket`, woff2). If you have the official Gmarket Sans files, drop
them into `assets/fonts/` and repoint the `src()` URLs in `tokens/fonts.css`. Noto
Sans KR loads from Google Fonts.
