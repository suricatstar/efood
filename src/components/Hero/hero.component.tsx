import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'
import logo from "/logo.png"

const HeroSection = styled.section`
  background-color: ${colors.secondary};
  padding: 40px 0 40px;
  text-align: center;
  background-image: url('/fundo.png');
  background-size: cover;
  background-position: center;
`
const LogoStyle = styled.img`
  width: 7rem;
  height: 3rem;
  margin-bottom: 90px;
`

const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.primary};
  line-height: 42px;
  max-width: 539px;
  margin: 0 auto;
`

const Hero = () => {
  return (
    <HeroSection>
      <div className="container">
        <LogoStyle src={logo} alt="Logo da empresa" />
        <Title>
          Viva experiências gastronômicas<br />
          no conforto da sua casa
        </Title>
      </div>
    </HeroSection>
  )
}

export default Hero