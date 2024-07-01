import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import { Container, Heading, Info, InfoContent, Order } from './styles';

export function Success() {
  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin size={32} />

              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>

                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div>
              <Timer size={32} />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar size={32} />

              <div>
                <span>Pagamento na entrega</span>

                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src="/images/delivery.svg" alt="Pedido concluído" />
    </Container>
  );
}
