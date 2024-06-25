import {
  CoffeeImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from './styles';

type CardProps = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function Card({ coffee }: CardProps) {
  return (
    <Container>
      <CoffeeImg src={coffee.image} />

      <Tags>
        {coffee.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
          <div>
            <button>decrement</button>
            <span>1</span>
            <button>increment</button>
          </div>

          <button>Carrinho</button>
        </Order>
      </Control>
    </Container>
  );
}
