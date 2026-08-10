import { Link } from 'react-router-dom'
import { ImageCredit } from '../../components/ImageCredit'
import { PageHeader } from '../../components/PageHeader'
import { projectAsset } from '../../content/assets'
import { whales } from '../../content/whales'

export function WhaleDirectoryPage() {
  return <div className="standard-page"><PageHeader eyebrow="Species teaching guides" title="Meet a whale">These profiles use real species cues, not claims about named or tracked individual whales.</PageHeader>
    <div className="directory-grid">{whales.map((whale) => <article key={whale.id} className="profile-preview"><img src={projectAsset(whale.image.localPath)} alt={whale.image.alt} /><ImageCredit media={whale.image} /><p className="eyebrow">{whale.species}</p><h2>{whale.guideLabel}</h2><p><em>{whale.scientificName}</em></p><p>{whale.identificationCues[0]}</p><Link to={`/whales/${whale.id}`}>See {whale.guideLabel}</Link></article>)}</div>
  </div>
}
