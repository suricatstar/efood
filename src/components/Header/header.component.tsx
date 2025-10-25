import { Link } from 'react-router-dom'
import logo from "/logo.png"
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { toggleCart } from '../../store/reducers/cart.slice'
import * as S from './header.styles'

const Header = () => {
  // LER quantidade de itens
  const items = useAppSelector(state => state.cart.items)
  const dispatch = useAppDispatch()
  
  // CALCULAR total de itens
  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

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
          <S.CartText onClick={() => dispatch(toggleCart())}>
            {getTotalItems()} produto(s) no carrinho
          </S.CartText>
        </S.HeaderContent>
      </div>
    </S.HeaderBar>
  )
}

export default Header