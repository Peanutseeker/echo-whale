import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { SourceLink } from '../../components/SourceLink'
import { conservation } from '../../content/conservation'
import { whaleById } from '../../content/whales'

export function ConservationPage() {
  return <div className="standard-page"><PageHeader eyebrow="Conservation spotlight" title="Help whales">Small, specific choices can make a real difference for the ocean.</PageHeader><div className="conservation-grid">{conservation.map((spotlight) => { const whale = whaleById(spotlight.whaleId); return <article className="conservation-card" key={spotlight.id}><p className="eyebrow">For the {whale?.species}</p><h2>{spotlight.issue}</h2><section><strong>One small action</strong><p>{spotlight.action}</p></section><p>{spotlight.reason}</p><SourceLink source={spotlight.source} /><Link to={`/whales/${spotlight.whaleId}`}>Open {whale?.guideLabel}</Link></article> })}</div></div>
}
