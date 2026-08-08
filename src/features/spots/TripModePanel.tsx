import { Link } from 'react-router-dom'
import { sightings } from '../../content/sightings'
import { whaleById } from '../../content/whales'

export function TripModePanel() {
  const latest = sightings[0]
  const whale = whaleById(latest.whaleId)
  return <aside className="trip-panel"><p className="eyebrow">Demo trip context</p><h2>Your ocean adventure</h2><p>Trip mode is a simple way to review the latest information from this demo journey.</p><dl><div><dt>Latest sighting</dt><dd>{whale?.name} · {latest.observedAt}</dd></div><div><dt>Where to look</dt><dd>{latest.place}</dd></div></dl><Link to={`/whales/${latest.whaleId}`}>Meet {whale?.name}</Link></aside>
}
