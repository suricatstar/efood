import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' // NOVO!
import { store } from './store' // NOVO!
import { GlobalStyles } from './styles/GlobalStyles'
import AppRoutes from './routes'
import Footer from './components/Footer/footer.components'

function App() {
  return (
    // Provider envolve tudo e dá acesso ao Redux
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
