import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  z-index: 999;
`

export const Sidebar = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? '0' : '-360px')};
  width: 360px;
  height: 100%;
  background-color: ${colors.primary};
  padding: 32px 8px;
  z-index: 1000;
  transition: right 0.3s ease-in-out;
  overflow-y: auto;
`

export const CartItem = styled.div`
  background-color: ${colors.secondary};
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  position: relative;
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const CartItemInfo = styled.div`
  flex: 1;
`

export const CartItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  margin-bottom: 16px;
`

export const CartItemPrice = styled.p`
  font-size: 14px;
  color: ${colors.primary};
  font-weight: 400;
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.primary};
  font-size: 16px;
  
  &:hover {
    opacity: 0.7;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
  
  &:hover {
    opacity: 0.9;
  }
`

export const EmptyCart = styled.p`
  color: ${colors.secondary};
  text-align: center;
  font-size: 14px;
  margin-top: 100px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.secondary};
  margin-bottom: 16px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.secondary};
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.dark};
  background-color: ${colors.secondary};
  border: none;
  margin-bottom: 8px;
  
  &::placeholder {
    color: ${colors.dark};
  }
`

export const InputRow = styled.div`
  display: flex;
  gap: 34px;
  
  > div {
    flex: 1;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.secondary};
  margin-bottom: 24px;
`