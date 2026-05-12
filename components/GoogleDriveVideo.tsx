'use client'

/**
 * GoogleDriveVideo — wrapper for Google Drive `/preview` iframe embeds.
 *
 * It solves three known quirks with the native embed:
 *  1. The "pop-out" / "open in new window" link at the top-right is blocked
 *     by a transparent overlay so visitors cannot navigate away.
 *  2. On touch/mobile layouts, the iframe is cropped upward in CSS so the
 *     Google Drive top chrome that appears during playback is hidden.
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
