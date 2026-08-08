import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { conservation } from '../../content/conservation'
import { whaleById } from '../../content/whales'

export function ConservationPage() {
  return <div className="standard-page"><PageHeader eyebrow="Conservation spotlight" title="Help whales">Small caring choices can make a big difference for the ocean.</PageHeader><div className="conservation-grid">{conservation.map((spotlight) => { const whale = whaleById(spotlight.whaleId); return <article className="conservation-card" key={spotlight.id}><p className="eyebrow">For {whale?.name}</p><h2>{spotlight.issue}</h2><section><strong>One small action</strong><p>{spotlight.action}</p></section><p>{spotlight.reason}</p><Link to={`/whales/${spotlight.whaleId}`}>Meet this whale</Link></article> })}</div></div>
}
