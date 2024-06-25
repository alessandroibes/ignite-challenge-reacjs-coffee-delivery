import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <aside>
        <img src="/logo.svg" alt="Coffee Delivery" />

        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <ShoppingCart size={22} weight="fill" />
      </aside>
    </Container>
  );
}
