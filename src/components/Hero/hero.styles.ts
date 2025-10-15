import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const HeroSection = styled.section`
  background-color: ${colors.secondary};
  padding: 40px 0 40px;
  text-align: center;
  background-image: url('/fundo.png');
  background-size: cover;
  background-position: center;
`

export const LogoStyle = styled.img`
  width: 7rem;
  height: 3rem;
  margin-bottom: 90px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.primary};
  line-height: 42px;
  max-width: 539px;
  margin: 0 auto;
`