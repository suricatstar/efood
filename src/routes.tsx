import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home.page'
import Restaurant from './pages/Restaurant/restaurant.page'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurant />} />
  </Routes>
)

export default AppRoutes