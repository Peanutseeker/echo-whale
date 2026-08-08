import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from '../components/AppShell'
import { HomePage } from '../features/home/HomePage'
import { SoundsPage } from '../features/sounds/SoundsPage'
import { WhaleDirectoryPage } from '../features/whales/WhaleDirectoryPage'
import { WhaleProfilePage } from '../features/whales/WhaleProfilePage'
import { EncyclopediaPage } from '../features/encyclopedia/EncyclopediaPage'
import { SpeciesDetailPage } from '../features/encyclopedia/SpeciesDetailPage'
import { SpotsPage } from '../features/spots/SpotsPage'
import { ConservationPage } from '../features/conservation/ConservationPage'

export function App() {
  return (
    <HashRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sounds" element={<SoundsPage />} />
          <Route path="/whales" element={<WhaleDirectoryPage />} />
          <Route path="/whales/:whaleId" element={<WhaleProfilePage />} />
          <Route path="/animals" element={<EncyclopediaPage />} />
          <Route path="/animals/:speciesId" element={<SpeciesDetailPage />} />
          <Route path="/spots" element={<SpotsPage />} />
          <Route path="/conservation" element={<ConservationPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AppShell>
    </HashRouter>
  )
}
