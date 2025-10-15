import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const BannerContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0 32px;
  color: ${colors.white};
`

export const Category = styled.p`
  font-size: 32px;
  font-weight: 100;
  margin: 0;
`

export const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin: 0;
`

export const MenuSection = styled.section`
  padding: 56px 0 120px;
`

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

export const MenuItem = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
  display: flex;
  flex-direction: column;
`

export const MenuImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const MenuTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.secondary};
  margin: 8px 0;
`

export const MenuDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.secondary};
  margin-bottom: 8px;
  flex: 1;
`

export const AddButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  margin-top: auto;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 56px;
  height: 100%;
`