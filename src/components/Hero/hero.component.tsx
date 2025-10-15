import logo from "/logo.png"
import * as S from './hero.styles'

const Hero = () => {
  return (
    <S.HeroSection>
      <div className="container">
        <S.LogoStyle src={logo} alt="Logo da empresa" />
        <S.Title>
          Viva experiências gastronômicas<br />
          no conforto da sua casa
        </S.Title>
      </div>
    </S.HeroSection>
  )
}

export default Hero