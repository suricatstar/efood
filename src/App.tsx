import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import AppRoutes from './routes'
import Footer from './components/Footer/footer.components'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
