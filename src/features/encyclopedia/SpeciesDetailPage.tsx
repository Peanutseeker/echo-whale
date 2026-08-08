import { Link, useParams } from 'react-router-dom'
import { StatusMessage } from '../../components/StatusMessage'
import { speciesById } from '../../content/species'

export function SpeciesDetailPage() {
  const { speciesId = '' } = useParams()
  const animal = speciesById(speciesId)
  if (!animal) return <div className="standard-page"><StatusMessage title="Sea animal not found">Try browsing the sea animals again.</StatusMessage><Link className="text-link" to="/animals">Back to sea animals</Link></div>
  return <article className="detail-page"><Link className="back-link" to="/animals">← Back to sea animals</Link><div className="detail-hero"><img src={animal.image} alt={`Illustration of a ${animal.name}`} /><div><p className="eyebrow">Ocean neighbour</p><h1>{animal.name}</h1><p className="lead">{animal.plainDescription}</p></div></div><section className="facts-card"><h2>Quick facts</h2><dl>{animal.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl></section></article>
}
