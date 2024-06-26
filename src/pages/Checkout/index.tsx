import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from '@phosphor-icons/react';

import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  Box,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
  TextInput,
} from './styles';
import { QuantityInput } from '../../components/QuantityInput';

export function Checkout() {
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order">
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <Box>
                <TextInput>
                  <input type="number" placeholder="CEP" />
                </TextInput>
              </Box>

              <Box>
                <TextInput>
                  <input type="text" placeholder="Rua" />
                </TextInput>
              </Box>

              <Box>
                <TextInput>
                  <input type="text" placeholder="Número" />
                </TextInput>
              </Box>

              <Box>
                <TextInput>
                  <input type="text" placeholder="Complemento" />
                </TextInput>
              </Box>

              <Box>
                <TextInput>
                  <input type="text" placeholder="Bairro" />
                </TextInput>
              </Box>

              <Box>
                <TextInput>
                  <input type="text" placeholder="Cidade" />
                </TextInput>
              </Box>

              <Box>
                <TextInput>
                  <input type="text" placeholder="Estado" />
                </TextInput>
              </Box>
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
              <div>
                <label>
                  <input type="radio" value="credit" />
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </label>

                <label>
                  <input type="radio" value="debit" />
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </label>

                <label>
                  <input type="radio" value="cash" />
                  <Money size={16} />
                  <span>Dinheiro</span>
                </label>
              </div>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <CartTotal>
          <>
            <Coffee>
              <div>
                <img src="/images/coffees/expresso-tradicional.png" />

                <div>
                  <span>Expresso Tradicional</span>

                  <CoffeeInfo>
                    <QuantityInput quantity={1} />

                    <button>
                      <Trash />
                      <span>Remover</span>
                    </button>
                  </CoffeeInfo>
                </div>
              </div>

              <aside>R$ 9,90</aside>
            </Coffee>

            <span />
          </>

          <>
            <Coffee>
              <div>
                <img src="/images/coffees/latte.png" />

                <div>
                  <span>Latte</span>

                  <CoffeeInfo>
                    <QuantityInput quantity={2} />

                    <button>
                      <Trash />
                      <span>Remover</span>
                    </button>
                  </CoffeeInfo>
                </div>
              </div>

              <aside>R$ 19,80</aside>
            </Coffee>

            <span />
          </>

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </CartTotalInfo>

          <CheckoutButton type="submit">Confirmar pedido</CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  );
}
