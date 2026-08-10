import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageCredit } from '../../components/ImageCredit'
import { PageHeader } from '../../components/PageHeader'
import { StatusMessage } from '../../components/StatusMessage'
import { SourceLink } from '../../components/SourceLink'
import { projectAsset } from '../../content/assets'
import { sounds } from '../../content/sounds'
import { whaleById } from '../../content/whales'

export function SoundsPage() {
  const [playing, setPlaying] = useState<string | null>(null)
  const [unavailable, setUnavailable] = useState<string | null>(null)
  const players = useRef(new Map<string, HTMLAudioElement>())

  async function toggle(soundId: string) {
    const audio = players.current.get(soundId)
    if (!audio) return
    if (playing === soundId) { audio.pause(); setPlaying(null); return }
    players.current.forEach((player, id) => { if (id !== soundId) player.pause() })
    try { await audio.play(); setPlaying(soundId); setUnavailable(null) } catch { setUnavailable(soundId); setPlaying(null) }
  }

  return <div className="standard-page"><PageHeader eyebrow="Sounds" title="Ocean sounds">Whales use sound across huge underwater distances. These recordings are best enjoyed with headphones somewhere quiet.</PageHeader>
    <div className="sound-grid">{sounds.map((sound) => {
      const whale = whaleById(sound.whaleId)
      if (!whale) return null
      return <article className="sound-card" key={sound.id}>
      <figure className="sound-card-figure"><img src={projectAsset(whale.image.localPath)} alt={whale.image.alt} /><ImageCredit media={whale.image} /></figure>
      <p className="eyebrow">{whale.species}</p><h2>{sound.title}</h2><p>{sound.description}</p>
      <audio ref={(node) => { if (node) players.current.set(sound.id, node) }} preload="metadata" src={sound.audioUrl} onEnded={() => setPlaying(null)} onError={() => setUnavailable(sound.id)} />
      <button className="audio-button" type="button" onClick={() => toggle(sound.id)} aria-label={`${playing === sound.id ? 'Pause' : 'Play'} ${sound.title}`}>{playing === sound.id ? 'Pause sound' : 'Play sound'}</button>
      <section className="transcript"><strong>What you are hearing</strong><p>{sound.transcript}</p></section>
      <p className="credit">{sound.credit}</p><SourceLink source={sound.source} />
      {unavailable === sound.id && <StatusMessage title="Audio unavailable">This recording could not load. You can still read what the sound is like.</StatusMessage>}
      <Link to={`/whales/${sound.whaleId}`}>Open {whale.guideLabel}</Link>
    </article>})}</div>
  </div>
}
