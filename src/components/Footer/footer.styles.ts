import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const FooterBar = styled.footer`
  background-color: ${colors.secondary};
  padding: 40px 0;
  text-align: center;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 32px;
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 80px;
`

export const SocialLink = styled.a`
  width: 2rem;
  height: 1rem;
  font-size: 2rem;
  color: ${colors.primary};
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.7;
  }
`

export const Description = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${colors.primary};
  max-width: 480px;
  margin: 0 auto;
`