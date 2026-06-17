'use client'

/**
 * GoogleDriveVideo — wrapper for Google Drive `/preview` iframe embeds.
 *
 * To keep media-heavy pages stable, the iframe is NOT mounted until the
 * visitor clicks play. Pages like the media archive reference ~20 videos;
 * mounting that many Google Drive iframes at once can exhaust memory and
 * cause the browser tab to reload or crash. A lightweight "play" facade is
 * shown until interaction, so at most the videos a visitor actually opens
 * are ever loaded.
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
}

export default function GoogleDriveVideo({
  src,
  title,
  loading = 'lazy',
  className = '',
}: GoogleDriveVideoProps) {
  const [active, setActive] = useState(false)

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        aria-label={`Play video: ${title}`}
        className={`gdrive-video-wrapper group flex items-center justify-center ${className}`}
      >
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <span className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
          <PlayCircle
            className="h-14 w-14 text-white/90 transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.5}
          />
          <span className="text-xs font-medium text-white/70">Play video</span>
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
