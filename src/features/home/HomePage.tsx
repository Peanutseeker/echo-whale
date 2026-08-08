import { FeatureCard } from '../../components/FeatureCard'
import { projectAsset } from '../../content/assets'

const homeFeatures = [
  ['Ocean sounds', 'Hear how whales speak', '/sounds', 'tone-coral'],
  ['Meet a whale', 'Discover a whale’s story', '/whales', 'tone-blue'],
  ['Sea animals', 'Explore life below the waves', '/animals', 'tone-mint'],
  ['Recent spots', 'See where whales were seen', '/spots', 'tone-violet'],
  ['Help whales', 'Learn one way to help', '/conservation', 'tone-sun'],
] as const

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">A whale-watch companion</p>
          <h1 id="home-title">The ocean is singing.<br />Come listen.</h1>
          <p>Explore whales and their ocean neighbours, one small discovery at a time.</p>
          <a className="primary-button" href="#/sounds">Start exploring</a>
        </div>
        <img src={projectAsset('/images/hero-whale.png')} alt="An illustrated humpback whale gliding through blue water" />
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
