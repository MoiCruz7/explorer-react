import { Route, Routes } from 'react-router-dom'
import { CountryDetailPage } from './pages/CountryDetailPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pais/:code" element={<CountryDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}