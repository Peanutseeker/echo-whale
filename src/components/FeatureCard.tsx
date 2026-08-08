import { Link } from 'react-router-dom'

export function FeatureCard({ title, description, to, tone }: { title: string; description: string; to: string; tone: string }) {
  return <Link className={`feature-card ${tone}`} to={to}><span className="card-bubble" aria-hidden="true">↗</span><h2>{title}</h2><p>{description}</p><span className="card-action">Explore</span></Link>
}
