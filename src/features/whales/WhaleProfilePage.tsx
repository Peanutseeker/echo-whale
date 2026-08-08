import { Link, useParams } from 'react-router-dom'
import { StatusMessage } from '../../components/StatusMessage'
import { whaleById } from '../../content/whales'

export function WhaleProfilePage() {
  const { whaleId = '' } = useParams()
  const whale = whaleById(whaleId)
  if (!whale) return <div className="standard-page"><StatusMessage title="Whale not found">Try browsing the whale stories again.</StatusMessage><Link className="text-link" to="/whales">Back to whales</Link></div>
  return <article className="detail-page"><Link className="back-link" to="/whales">← Back to whales</Link><div className="detail-hero"><img src={whale.image} alt={`Illustration of ${whale.name}, a ${whale.species}`} /><div><p className="eyebrow">{whale.species}</p><h1>{whale.name}</h1><p className="lead">{whale.story}</p></div></div>
    <section className="facts-card"><h2>How to recognise {whale.name}</h2><ul>{whale.markings.map((marking) => <li key={marking}>{marking}</li>)}</ul></section>
    <Link className="primary-button" to="/conservation">See how to help whales</Link></article>
}
