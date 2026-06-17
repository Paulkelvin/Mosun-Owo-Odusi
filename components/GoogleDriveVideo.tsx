'use client'

/**
 * GoogleDriveVideo — wrapper for Google Drive `/preview` iframe embeds.
 *
 * To keep media-heavy pages stable, the iframe is NOT mounted until the
 * visitor clicks play. Pages like the media archive reference ~20 videos;
 * mounting that many Google Drive iframes at once can exhaust memory and
 * cause the browser tab to reload or crash. Until interaction a lightweight
 * facade is shown — a Drive-generated thumbnail (derived from the file id)
 * plus a play button — so at most the videos a visitor actually opens load.
 *
 * Once active it solves the native embed quirks:
 *  1. The top-right "pop-out / open in Drive" link is blocked by a shield.
 *  2. The bottom controls remain fully accessible.
 */

import { useState } from 'react'
import { PlayCircle } from 'lucide-react'

type GoogleDriveVideoProps = {
  src: string
  title: string
  loading?: 'lazy' | 'eager'
  className?: string
  /** Optional explicit poster; otherwise derived from the Drive file id. */
  poster?: string
}

/** Build a Drive thumbnail URL from a /preview or ?id= share link. */
function driveThumbnail(src: string): string | null {
  const match = src.match(/\/d\/([^/]+)/) || src.match(/[?&]id=([^&]+)/)
  return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1280` : null
}

export default function GoogleDriveVideo({
  src,
  title,
  loading = 'lazy',
  className = '',
  poster,
}: GoogleDriveVideoProps) {
  const [active, setActive] = useState(false)
  const [posterFailed, setPosterFailed] = useState(false)
  const thumbnail = poster ?? driveThumbnail(src)

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        aria-label={`Play video: ${title}`}
        className={`gdrive-video-wrapper group flex items-center justify-center ${className}`}
      >
        {/* Fallback gradient (also covers the gap while the thumbnail loads) */}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />

        {thumbnail && !posterFailed && (
          // eslint-disable-next-line @next/next/no-img-element -- external Drive thumbnail, not optimisable via next/image
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            onError={() => setPosterFailed(true)}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Darken for play-button contrast */}
        <span className="pointer-events-none absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />

        <span className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
          <PlayCircle
            className="h-14 w-14 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.5}
          />
          <span className="text-xs font-medium text-white/90 drop-shadow">Play video</span>
        </span>
      </button>
    )
  }

  return (
    <div className={`gdrive-video-wrapper ${className}`}>
      <iframe
        src={src}
        title={title}
        loading={loading}
        className="gdrive-video-iframe"
        referrerPolicy="no-referrer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      {/* Invisible overlay that blocks the top-right "open in Drive" link */}
      <div className="gdrive-video-top-shield" aria-hidden="true" />
    </div>
  )
}
