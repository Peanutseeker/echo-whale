import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DemoNotice } from '../../components/DemoNotice'
import { PageHeader } from '../../components/PageHeader'
import { sightings } from '../../content/sightings'
import { whaleById } from '../../content/whales'
import { SightingsMap } from './SightingsMap'
import { TripModePanel } from './TripModePanel'

export function SpotsPage() {
  const [showMap, setShowMap] = useState(false)
  return <div className="standard-page"><PageHeader eyebrow="Recent spots" title="Where have whales been?">Read the latest demo sightings first, then explore their locations on the map.</PageHeader><DemoNotice />
    <div className="spots-layout"><section><div className="list-heading"><h2>Recent demo sightings</h2><button type="button" onClick={() => setShowMap((value) => !value)} aria-expanded={showMap}>{showMap ? 'Hide map' : 'Show map'}</button></div><ul className="sighting-list" aria-label="Recent demo sightings">{sightings.map((sighting) => { const whale = whaleById(sighting.whaleId); return <li key={sighting.id}><Link to={`/whales/${sighting.whaleId}`}><strong>{whale?.name}</strong><span>{sighting.place} · {sighting.observedAt}</span><small>{sighting.status}</small></Link></li> })}</ul>{showMap && <SightingsMap />}</section><TripModePanel /></div>
  </div>
}
