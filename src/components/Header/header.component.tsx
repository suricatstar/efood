import { Link } from 'react-router-dom'
import logo from "/logo.png"
import { useCart } from '../../contexts/cart.context'
import * as S from './header.styles'

const Header = () => {
  const { getTotalItems, toggleCart } = useCart()

  return (
    <S.HeaderBar>
      <div className="container">
        <S.HeaderContent>
          <S.RestaurantLink to="/">
            Restaurantes
          </S.RestaurantLink>
          <Link to="/">
            <S.LogoStyle src={logo} alt="Logo da empresa" />
          </Link>
          <S.CartText onClick={toggleCart}>
            {getTotalItems()} produto(s) no carrinho
          </S.CartText>
        </S.HeaderContent>
      </div>
    </S.HeaderBar>
  )
}

export default Header