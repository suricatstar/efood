import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/GlobalStyles'
import logo from "/logo.png"

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
          <CartText to="/">
            Restaurante
          </CartText>
          <Link to="/">
            <LogoStyle src={logo} alt="Logo da empresa" />
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