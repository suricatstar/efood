import logo from "/logo.png"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import * as S from './footer.styles'

const Footer = () => {
  return (
    <S.FooterBar>
      <div className="container">
        <S.Logo src={logo} alt="Logo da empresa" />
        <S.SocialMedia>
          <S.SocialLink href="#" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </S.SocialLink>
          <S.SocialLink href="#" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </S.SocialLink>
          <S.SocialLink href="#" target="_blank" aria-label="Twitter">
            <FaSquareXTwitter />
          </S.SocialLink>
        </S.SocialMedia>
        <S.Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
        </S.Description>
      </div>
    </S.FooterBar>
  )
}

export default Footer