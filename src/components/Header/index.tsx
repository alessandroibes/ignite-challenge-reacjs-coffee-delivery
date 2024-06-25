import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Aside, Container } from './styles';

export function Header() {
  return (
    <Container>
      <a href="#">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </a>
      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <a href="#">
          <ShoppingCart size={22} weight="fill" />
          <span>5</span>
        </a>
      </Aside>
    </Container>
  );
}
