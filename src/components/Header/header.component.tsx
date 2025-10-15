import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/GlobalStyles'
import logo from "/logo.png"
import { useCart } from '../../contexts/cart.context'

const HeaderBar = styled.header`
  background-color: ${colors.secondary};
  background-size: cover;
  background-position: center;
  background-image: url('/fundo.png');
  padding: 40px 0;
  text-align: center;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoStyle = styled.img`
  width: 100px;
  height: auto;
`

const CartText = styled.button`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`

const RestaurantLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  
  &:hover {
    opacity: 0.8;
  }
`

const Header = () => {
  const { getTotalItems, toggleCart } = useCart()

  return (
    <HeaderBar>
      <div className="container">
        <HeaderContent>
          <RestaurantLink to="/">
            Restaurantes
          </RestaurantLink>
          <Link to="/">
            <LogoStyle src={logo} alt="Logo da empresa" />
          </Link>
          <CartText onClick={toggleCart}>
            {getTotalItems()} produto(s) no carrinho
          </CartText>
        </HeaderContent>
      </div>
    </HeaderBar>
  )
}

export default Header