'use client'

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.
//TODO: complete 404 page
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>404</body>
    </html>
  )
}
