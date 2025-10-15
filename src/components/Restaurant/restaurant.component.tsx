import * as S from './restaurant.styles'

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
    <S.Card>
      <S.RestaurantImage src={image} alt={name} />
      <S.Tags>
        {highlighted && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>{type}</S.Tag>
      </S.Tags>
      <S.CardContent>
        <S.CardHeader>
          <S.RestaurantName>{name}</S.RestaurantName>
          <S.Rating>
            {rating}
            <img src="/estrela.png" alt="Estrela" />
          </S.Rating>
        </S.CardHeader>
        <S.Description>{description}</S.Description>
        <S.Button to={`/restaurant/${id}`}>Saiba mais</S.Button>
      </S.CardContent>
    </S.Card>
  )
}

export default Restaurant