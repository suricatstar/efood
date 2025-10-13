import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/GlobalStyles'

const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  position: relative;
  max-width: 472px;
`

const RestaurantImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
`

const CardContent = styled.div`
  padding: 8px;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const RestaurantName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
`

const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.primary};
  margin-bottom: 16px;
`

const Button = styled(Link)`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
`

type RestaurantProps = {
  id: number
  name: string
  rating: number
  description: string
  image: string
  highlighted?: boolean
  type: string
}

const Restaurant = ({ 
  id, 
  name, 
  rating, 
  description, 
  image, 
  highlighted, 
  type 
}: RestaurantProps) => {
  return (
    <Card>
      <RestaurantImage src={image} alt={name} />
      <Tags>
        {highlighted && <Tag>Destaque da semana</Tag>}
        <Tag>{type}</Tag>
      </Tags>
      <CardContent>
        <CardHeader>
          <RestaurantName>{name}</RestaurantName>
          <Rating>
            {rating}
            <img src="/estrela.png" alt="Estrela" />
          </Rating>
        </CardHeader>
        <Description>{description}</Description>
        <Button to={`/restaurant/${id}`}>Saiba mais</Button>
      </CardContent>
    </Card>
  )
}

export default Restaurant