import { Link, useParams } from 'react-router-dom'
import { ImageCredit } from '../../components/ImageCredit'
import { StatusMessage } from '../../components/StatusMessage'
import { SourceLink } from '../../components/SourceLink'
import { projectAsset } from '../../content/assets'
import { whaleById } from '../../content/whales'

export function WhaleProfilePage() {
  const { whaleId = '' } = useParams()
  const whale = whaleById(whaleId)
  if (!whale) return <div className="standard-page"><StatusMessage title="Whale not found">Try browsing the whale guides again.</StatusMessage><Link className="text-link" to="/whales">Back to whales</Link></div>
  return <article className="detail-page"><Link className="back-link" to="/whales">← Back to whales</Link><div className="detail-hero"><figure><img src={projectAsset(whale.image.localPath)} alt={whale.image.alt} /><ImageCredit media={whale.image} /></figure><div className="detail-copy"><p className="eyebrow">Species teaching guide</p><h1>{whale.guideLabel}</h1><p className="scientific-name">{whale.species} · <em>{whale.scientificName}</em></p><p className="lead">{whale.introduction}</p><SourceLink source={whale.source} /></div></div>
    <section className="facts-card"><h2>How to recognise a {whale.species.toLowerCase()}</h2><ul>{whale.identificationCues.map((cue) => <li key={cue}>{cue}</li>)}</ul></section>
    <Link className="primary-button" to="/conservation">See how to help whales</Link></article>
}
