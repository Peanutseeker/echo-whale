import { Link } from 'react-router-dom'
import { SourceLink } from '../../components/SourceLink'
import { bostonFieldGuide } from '../../content/bostonFieldGuide'

export function BostonFieldGuidePanel() {
  const entries = [bostonFieldGuide.route, bostonFieldGuide.season, bostonFieldGuide.wildlife, bostonFieldGuide.observation]

  return <section className="field-guide" aria-labelledby="boston-guide-title">
    <div className="field-guide-intro">
      <p className="eyebrow">Local whale-watch context</p>
      <h1 id="boston-guide-title">Boston whale-watch field guide</h1>
      <p>This page is a source-backed planning and learning guide. It is not a sightings tracker.</p>
      <p className="review-label">{bostonFieldGuide.reviewLabel}</p>
    </div>
    <div className="field-guide-grid">
      {entries.map((entry) => <article className="field-guide-card" key={entry.title}>
        <h2>{entry.title}</h2>
        <p>{entry.detail}</p>
        <SourceLink source={entry.source} />
      </article>)}
    </div>
    <aside className="guide-next-step">
      <div>
        <p className="eyebrow">Keep exploring</p>
        <h2>Start with familiar shapes</h2>
        <p>Use the teaching guides to connect what a naturalist points out to a clear body shape or color pattern.</p>
      </div>
      <Link className="secondary-button" to="/whales">Open whale guides</Link>
    </aside>
  </section>
}
