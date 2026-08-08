import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { sightings } from '../../content/sightings'
import { whaleById } from '../../content/whales'
import 'leaflet/dist/leaflet.css'

export function SightingsMap() {
  return <div className="map-frame"><MapContainer center={[42.32, -70.92]} zoom={10} scrollWheelZoom={false} aria-label="Demo whale sightings map"><TileLayer attribution="© OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{sightings.map((sighting) => { const whale = whaleById(sighting.whaleId); return <CircleMarker key={sighting.id} center={[sighting.latitude, sighting.longitude]} radius={10} pathOptions={{ color: '#063e66', fillColor: '#f5c753', fillOpacity: 1 }}><Popup><strong>{whale?.name}</strong><br />{sighting.place}<br /><Link to={`/whales/${sighting.whaleId}`}>Open whale story</Link></Popup></CircleMarker> })}</MapContainer></div>
}
