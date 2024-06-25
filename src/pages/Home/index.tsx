import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { CoffeeList, Heading, Hero, HeroContent, Info } from './styles';

export function Home() {
  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart size={32} weight="fill" />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package size={32} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer size={32} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee size={32} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </HeroContent>
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>TRADICIONAL</span>
            </div>

            <h3 className="cardTitle">Expresso Tradicional</h3>

            <span className="cardDescription">
              O tradicional café feito com água quente e grãos moídos
            </span>

            <div className="cardControl">
              <div className="cardPrice">
                <span>R$</span>
                <span>9,90</span>
              </div>

              <div className="cardOrder">
                <div className="cardQuantityInput">
                  <button>decrement</button>
                  <span>1</span>
                  <button>increment</button>
                </div>

                <button>Carrinho</button>
              </div>
            </div>
          </div>
        </div>
      </CoffeeList>
    </div>
  );
}
