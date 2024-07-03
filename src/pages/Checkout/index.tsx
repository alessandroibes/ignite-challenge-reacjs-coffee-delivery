import { z } from 'zod';

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
} from './styles';
import { QuantityInput } from '../../components/QuantityInput';
import { Radio } from '../../components/Radio';
import { TextInput } from '../../components/TextInput';

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

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
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
              />
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
                <Radio isSelected={true} value="credit">
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio isSelected={false} value="debit">
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio isSelected={false} value="cash">
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
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
