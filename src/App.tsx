import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import AppRoutes from './routes'
import Footer from './components/Footer/footer.components'
import { CartProvider } from './contexts/cart.context'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <AppRoutes />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
