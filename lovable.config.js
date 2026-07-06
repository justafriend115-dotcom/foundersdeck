// lovable.config.js
module.exports = {
  // Directory containing Vite build output
  publish: "dist",
  // Single‑page‑app fallback (all routes serve index.html)
  redirects: [
    {
      from: "/*",
      to: "/index.html",
      status: 200
    }
  ],
  // Optional security headers (feel free to extend)
  headers: [
    {
      source: "/*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
      ]
    }
  ]
};
