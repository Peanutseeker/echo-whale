import type { MediaAsset } from '../content/types'

type ImageCreditProps = {
  media: MediaAsset
}

export function ImageCredit({ media }: ImageCreditProps) {
  const linkLabel = `Photo source: ${media.creator}, ${media.license}`

  return <small className="image-credit" aria-label={`Photo credit for ${media.alt}`}>
    <a href={media.sourcePageUrl} target="_blank" rel="noreferrer" aria-label={linkLabel}>
      Photo: {media.creator} · {media.license} <span aria-hidden="true">↗</span>
    </a>
  </small>
}
