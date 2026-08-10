import { FeatureCard } from '../../components/FeatureCard'
import { projectAsset } from '../../content/assets'
import { media } from '../../content/media'

const homeFeatures = [
  ['Ocean sounds', 'Hear field recordings with listening guides', '/sounds', 'tone-coral'],
  ['Meet a whale', 'Learn the shapes that help with recognition', '/whales', 'tone-blue'],
  ['Sea animals', 'Explore life below the waves', '/animals', 'tone-mint'],
  ['Boston field guide', 'Understand Stellwagen waters before a trip', '/spots', 'tone-violet'],
  ['Help whales', 'Choose one practical action', '/conservation', 'tone-sun'],
] as const

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">A whale-watch companion</p>
          <h1 id="home-title">Look closer.<br />Listen longer.</h1>
          <p>A small field guide for curious passengers: whale sounds, species cues, ocean neighbours, Boston context and one way to help.</p>
          <a className="primary-button" href="#/sounds">Start exploring</a>
        </div>
        <div className="hero-media"><img src={projectAsset(media.humpback.localPath)} alt={media.humpback.alt} /></div>
      </section>
      <section className="feature-section" aria-label="What would you like to discover?">
        <div className="section-heading"><p className="eyebrow">Choose an adventure</p><h2>What would you like to discover?</h2></div>
        <div className="feature-grid">
          {homeFeatures.map(([title, description, to, tone]) => <FeatureCard key={title} title={title} description={description} to={to} tone={tone} />)}
        </div>
      </section>
    </div>
  )
}
