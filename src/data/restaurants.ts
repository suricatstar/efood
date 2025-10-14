export type Restaurant = {
  id: number
  name: string
  rating: number
  description: string
  image: string
  highlighted?: boolean
  type: string
  category: string
  banner: string
  menu: MenuItem[]
}

export type MenuItem = {
  id: number
  name: string
  description: string
  image: string
  portion: string
  price: number
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    rating: 4.9,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagem cuidadosa e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: '/sushIMG.png',
    highlighted: true,
    type: 'Japonesa',
    category: 'Japonesa',
    banner: '/sushIMG.png',
    menu: [
      {
        id: 1,
        name: 'Sushi Variado',
        description: 'Combinação especial de sushis frescos com salmão, atum e peixe branco.',
        image: '/sushIMG.png',
        portion: 'Serve de 2 a 3 pessoas',
        price: 89.90
      },
      {
        id: 2,
        name: 'Temaki de Salmão',
        description: 'Temaki recheado com salmão fresco, cream cheese e cebolinha.',
        image: '/sushIMG.png',
        portion: 'Serve 1 pessoa',
        price: 35.90
      },
      {
        id: 3,
        name: 'Hot Roll',
        description: 'Sushi frito empanado com recheio de salmão e cream cheese.',
        image: '/sushIMG.png',
        portion: 'Serve 1 pessoa',
        price: 42.90
      }
    ]
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana',
    category: 'Italiana',
    banner: '/macarroIMG.png',
    menu: [
      {
        id: 1,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: '/pizza.png',
        portion: 'Serve de 2 a 3 pessoas',
        price: 60.90
      },
      {
        id: 2,
        name: 'Lasanha Bolonhesa',
        description: 'Camadas de massa fresca, molho bolonhesa artesanal e muito queijo.',
        image: '/macarroIMG.png',
        portion: 'Serve de 2 a 3 pessoas',
        price: 75.90
      },
      {
        id: 3,
        name: 'Risoto de Funghi',
        description: 'Arroz arbóreo cremoso com cogumelos frescos e parmesão.',
        image: '/macarroIMG.png',
        portion: 'Serve de 1 a 2 pessoas',
        price: 68.90
      }
    ]
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana',
    category: 'Italiana',
    banner: '/macarroIMG.png',
    menu: [
      {
        id: 1,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        image: '/pizza.png',
        portion: 'Serve de 2 a 3 pessoas',
        price: 60.90
      }
    ]
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana',
    category: 'Italiana',
    banner: '/macarroIMG.png',
    menu: [
      {
        id: 1,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        image: '/pizza.png',
        portion: 'Serve de 2 a 3 pessoas',
        price: 60.90
      }
    ]
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana',
    category: 'Italiana',
    banner: '/macarroIMG.png',
    menu: [
      {
        id: 1,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        image: '/pizza.png',
        portion: 'Serve de 2 a 3 pessoas',
        price: 60.90
      }
    ]
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana',
    category: 'Italiana',
    banner: '/macarroIMG.png',
    menu: [
      {
        id: 1,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        image: '/pizza.png',
        portion: 'Serve de 2 a 3 pessoas',
        price: 60.90
      }
    ]
  }
]