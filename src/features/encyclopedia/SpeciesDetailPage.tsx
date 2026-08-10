import { Link, useParams } from 'react-router-dom'
import { ImageCredit } from '../../components/ImageCredit'
import { StatusMessage } from '../../components/StatusMessage'
import { SourceLink } from '../../components/SourceLink'
import { projectAsset } from '../../content/assets'
import { speciesById } from '../../content/species'

export function SpeciesDetailPage() {
  const { speciesId = '' } = useParams()
  const animal = speciesById(speciesId)
  if (!animal) return <div className="standard-page"><StatusMessage title="Sea animal not found">Try browsing the sea animals again.</StatusMessage><Link className="text-link" to="/animals">Back to sea animals</Link></div>
  return <article className="detail-page"><Link className="back-link" to="/animals">← Back to sea animals</Link><div className="detail-hero"><figure><img src={projectAsset(animal.image.localPath)} alt={animal.image.alt} /><ImageCredit media={animal.image} /></figure><div className="detail-copy"><p className="eyebrow">Ocean neighbour</p><h1>{animal.name}</h1><p className="scientific-name"><em>{animal.scientificName}</em></p><p className="lead">{animal.plainDescription}</p><SourceLink source={animal.source} /></div></div><section className="facts-card"><h2>Quick facts</h2><dl>{animal.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl></section></article>
}
