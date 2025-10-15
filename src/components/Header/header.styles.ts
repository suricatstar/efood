import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/GlobalStyles'

export const HeaderBar = styled.header`
  background-color: ${colors.secondary};
  background-size: cover;
  background-position: center;
  background-image: url('/fundo.png');
  padding: 40px 0;
  text-align: center;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoStyle = styled.img`
  width: 100px;
  height: auto;
`

export const CartText = styled.button`
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

export const RestaurantLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  
  &:hover {
    opacity: 0.8;
  }
`