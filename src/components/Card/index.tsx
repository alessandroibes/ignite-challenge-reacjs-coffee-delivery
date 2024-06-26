import { ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

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
import { QuantityInput } from '../QuantityInput';

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
  const theme = useTheme();

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
          <QuantityInput quantity={1} />

          <button>
            <ShoppingCart size={22} color={theme.colors['base-card']} />
          </button>
        </Order>
      </Control>
    </Container>
  );
}
