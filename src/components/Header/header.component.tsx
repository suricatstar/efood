import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/GlobalStyles'

const HeaderBar = styled.header`
  background-color: ${colors.secondary};
  padding: 40px 0;
  text-align: center;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
`

const CartText = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
`

const Header = () => {
  return (
    <HeaderBar>
      <div className="container">
        <HeaderContent>
          <Link to="/">
            <Logo>Restaurantes</Logo>
          </Link>
          <Link to="/">
            <Logo>efood</Logo>
          </Link>
          <CartText to="#">
            0 produto(s) no carrinho
          </CartText>
        </HeaderContent>
      </div>
    </HeaderBar>
  )
}

export default Header