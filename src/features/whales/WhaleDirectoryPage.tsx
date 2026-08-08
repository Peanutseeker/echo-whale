import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { whales } from '../../content/whales'

export function WhaleDirectoryPage() {
  return <div className="standard-page"><PageHeader eyebrow="Whale stories" title="Meet a whale">Each whale has its own markings and story. Start with the one you spotted.</PageHeader>
    <div className="directory-grid">{whales.map((whale) => <Link key={whale.id} className="profile-preview" to={`/whales/${whale.id}`}><img src={whale.image} alt="" /><p className="eyebrow">{whale.species}</p><h2>{whale.name}</h2><p>{whale.markings[0]}</p><span>See {whale.name}'s story</span></Link>)}</div>
  </div>
}
