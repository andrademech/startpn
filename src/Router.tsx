import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Services } from './pages/Home/components/Services'
import { Home } from './pages/Home'
import { Upcoming } from './pages/Upcoming'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<Services />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Route>
    </Routes>
  )
}
