import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { ImageCredit } from '../../components/ImageCredit'
import { projectAsset } from '../../content/assets'
import { species } from '../../content/species'

export function EncyclopediaPage() {
  const [query, setQuery] = useState('')
  const normalized = query.trim().toLowerCase()
  const matches = species.filter((animal) => animal.name.toLowerCase().includes(normalized))
  return <div className="standard-page"><PageHeader eyebrow="Sea animals" title="Meet the neighbours">Whales share the sea with wonderful animals of every shape and size.</PageHeader>
    <label className="search-label" htmlFor="animal-search">Search sea animals</label><div className="search-row"><input id="animal-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try turtle or octopus" />{query && <button type="button" onClick={() => setQuery('')}>Clear search</button>}</div>
    {matches.length ? <div className="directory-grid">{matches.map((animal) => <article className="profile-preview" key={animal.id}><img src={projectAsset(animal.image.localPath)} alt={animal.image.alt} /><ImageCredit media={animal.image} /><h2>{animal.name}</h2><p><em>{animal.scientificName}</em></p><p>{animal.plainDescription}</p><Link to={`/animals/${animal.id}`}>Discover {animal.name}</Link></article>)}</div> : <section className="empty-state"><h2>No sea animal found</h2><p>Try a shorter word or browse all of our sea animals.</p><button type="button" onClick={() => setQuery('')}>Show all sea animals</button></section>}
  </div>
}
