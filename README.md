# 🍽️ efood - Plataforma de Delivery

![efood](public/logo.png)

Plataforma de delivery de comida desenvolvida com React, TypeScript e Styled Components. Este projeto permite aos usuários navegar por diferentes restaurantes, visualizar cardápios e realizar pedidos online.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React 19](https://react.dev/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Vite](https://vitejs.dev/) - Build tool e dev server ultra-rápido
- [Styled Components](https://styled-components.com/) - Estilização com CSS-in-JS
- [React Router DOM](https://reactrouter.com/) - Roteamento para aplicações React
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones

## 📋 Funcionalidades

- ✅ Listagem de restaurantes com destaque e categorias
- ✅ Visualização detalhada de cardápios
- ✅ Sistema de carrinho de compras
- ✅ Processo de checkout em múltiplas etapas:
  - Revisão do carrinho
  - Dados de entrega
  - Informações de pagamento
  - Confirmação do pedido
- ✅ Modal de detalhes dos produtos
- ✅ Cálculo automático do valor total
- ✅ Interface responsiva e moderna

## 🎨 Layout

O design do projeto foi baseado no layout disponível no Figma:
[Visualizar layout](https://www.figma.com/design/JjduV2Tg713TzYUUsees8b/efood)

## 📁 Estrutura do Projeto

```
efood/
├── public/              # Arquivos estáticos (imagens, ícones)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Carrinho/   # Componente do carrinho
│   │   ├── Footer/     # Rodapé da aplicação
│   │   ├── Header/     # Cabeçalho da aplicação
│   │   ├── Hero/       # Banner principal
│   │   ├── Modal/      # Modal de detalhes do produto
│   │   └── Restaurant/ # Card de restaurante
│   ├── contexts/        # Context API (gerenciamento de estado)
│   │   └── cart.context.tsx
│   ├── data/           # Dados mockados
│   │   └── restaurants.ts
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home/       # Página inicial
│   │   └── Restaurant/ # Página do restaurante
│   ├── styles/         # Estilos globais
│   │   └── GlobalStyles.ts
│   ├── types/          # Definições de tipos TypeScript
│   │   └── checkout.types.ts
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Ponto de entrada
│   └── routes.tsx      # Configuração de rotas
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔧 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/efood.git
cd efood
```

Instale as dependências:

```bash
npm install
```

## 🎯 Como Usar

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`


```

## 🎨 Paleta de Cores

```css
--primary: #E66767    /* Vermelho principal */
--secondary: #FFEBD9  /* Bege/Rosa claro */
--white: #FFFFFF      /* Branco */
--dark: #4B4B4B       /* Cinza escuro */
--background: #FFF8F2 /* Fundo da página */
```

## 📝 Context API

O projeto utiliza Context API para gerenciamento de estado do carrinho:

```tsx
const { 
  items,              // Itens no carrinho
  isOpen,             // Estado do carrinho (aberto/fechado)
  currentStep,        // Etapa atual do checkout
  addToCart,          // Adicionar item ao carrinho
  removeFromCart,     // Remover item do carrinho
  getTotalPrice,      // Calcular total
  getTotalItems       // Contar itens
} = useCart()
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido durante o curso da EBAC

---

## 📚 Recursos Adicionais

### Documentação das Tecnologias

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Styled Components Docs](https://styled-components.com/docs)
- [React Router Docs](https://reactrouter.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Melhorias Futuras

- [ ] Integração com API real
- [ ] Sistema de autenticação
- [ ] Histórico de pedidos
- [ ] Avaliações e comentários
- [ ] Filtros e busca avançada
- [ ] Favoritos
- [ ] Notificações em tempo real
- [ ] Suporte a múltiplos idiomas
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
