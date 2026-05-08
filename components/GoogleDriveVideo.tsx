'use client'

/**
 * GoogleDriveVideo — wrapper for Google Drive `/preview` iframe embeds.
 *
 * It solves three known quirks with the native embed:
 *  1. The "pop-out" / "open in new window" link at the top-right is blocked
 *     by a transparent overlay so visitors cannot navigate away.
 *  2. The semi-transparent black overlay that flashes when toggling play/pause
 *     is hidden via a CSS clip on the top ~48px of the iframe (where the
 *     inverted, barely-visible controls live).
 *  3. The bottom controls remain fully accessible and visible.
 */

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
