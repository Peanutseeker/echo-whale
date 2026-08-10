import type { SourceReference } from '../content/types'

type SourceLinkProps = {
  source: SourceReference
}

export function SourceLink({ source }: SourceLinkProps) {
  return <a className="source-link" href={source.url} target="_blank" rel="noreferrer" aria-label={`Source: ${source.label} (opens in a new tab)`}>
    <span aria-hidden="true">Source:</span> {source.label} <span aria-hidden="true">↗</span>
  </a>
}
