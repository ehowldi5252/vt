// ─────────────────────────────────────────────────────────────
// jsonbin.io connection — FILL THIS IN before you upload.
//
// 1. Create ONE new bin at https://jsonbin.io with initial content: {}
//    Copy its Bin ID into `binId` below.
// 2. Create an ACCESS KEY (Dashboard → API Keys) with Bin/Read + Bin/Update
//    permission. Copy it into `key` below. Do NOT use your Master Key here —
//    this file is public on GitHub Pages and anyone can read it.
//
// Leave the fields blank to run the app in local-only mode (nothing saved).
// ─────────────────────────────────────────────────────────────
window.VC_CONFIG = {
  binId: "6a3d7426da38895dfefee741",            // e.g. "66f0a1b2ac...."
  key:   "$2a$10$6hF3zYFHTQs6k/sRPfItzeHQKtZLxyHd8SQvPfOyE4wpSVIUcJZIK",            // your X-Access-Key
  keyHeader: "X-Access-Key",
  pollSeconds: 30,      // how often to pull the other person's changes
};
