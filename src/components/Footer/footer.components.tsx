import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'
import logo from "/logo.png"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterBar = styled.footer`
  background-color: ${colors.secondary};
  padding: 40px 0;
  text-align: center;
`

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 32px;
`

const SocialMedia = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 80px;
`

const SocialLink = styled.a`
  width: 2rem;
  height: 1rem;
  font-size: 2rem;
  
  
`

const Description = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${colors.primary};
  max-width: 480px;
  margin: 0 auto;
`

const Footer = () => {
  return (
    <FooterBar>
      <div className="container">
        <Logo src={logo} alt="Logo da empresa" />
        <SocialMedia>
          <SocialLink href="#" target="_blank">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <FaFacebook />
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <FaSquareXTwitter />
          </SocialLink>
        </SocialMedia>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
        </Description>
      </div>
    </FooterBar>
  )
}

export default Footer