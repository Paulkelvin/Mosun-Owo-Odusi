// Project id and dataset are public (they ship in the browser bundle), so we
// fall back to the known values. This keeps `next build` working on hosts
// where the NEXT_PUBLIC_SANITY_* env vars haven't been configured yet.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'z4hvf7v8'
