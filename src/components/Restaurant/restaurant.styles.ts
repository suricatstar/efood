import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/GlobalStyles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  position: relative;
  max-width: 472px;
`

export const RestaurantImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
`

export const CardContent = styled.div`
  padding: 8px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const RestaurantName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.primary};
  margin-bottom: 16px;
`

export const Button = styled(Link)`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  
  &:hover {
    opacity: 0.9;
  }
`