import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { CoffeeList, Heading, Hero, HeroContent, Info } from './styles';

export function Home() {
  const theme = useTheme();

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
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>TRADICIONAL</span>
            </div>

            <h3 className="cardTitle">Expresso Americano</h3>

            <span className="cardDescription">
              Expresso diluído, menos intenso que o tradicional
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>TRADICIONAL</span>
            </div>

            <h3 className="cardTitle">Expresso Cremoso</h3>

            <span className="cardDescription">
              Café expresso tradicional com espuma cremosa
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>TRADICIONAL</span>
              <span>GELADO</span>
            </div>

            <h3 className="cardTitle">Expresso Gelado</h3>

            <span className="cardDescription">
              Babida preparada com café expresso e cubos de gelo
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>

            <h3 className="cardTitle">Café com Leite</h3>

            <span className="cardDescription">
              Meio a meio de expresso tradicional com leite vaporizado
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>

            <h3 className="cardTitle">Latte</h3>

            <span className="cardDescription">
              Uma dose de café expresso com o dobro de leite e espuma cremosa
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>

            <h3 className="cardTitle">Capuccino</h3>

            <span className="cardDescription">
              Babida com canela feita de doses iguais de café, leite e espuma
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>

            <h3 className="cardTitle">Macchiato</h3>

            <span className="cardDescription">
              Café expresso misturado com um pouco de leite quente e espuma
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>TRADICIONAL</span>
              <span>COM LEITE</span>
            </div>

            <h3 className="cardTitle">Mocaccino</h3>

            <span className="cardDescription">
              Café expresso com calda de chocolate, pouco leite e espuma
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>ESPECIAL</span>
              <span>COM LEITE</span>
            </div>

            <h3 className="cardTitle">Chocolate Quente</h3>

            <span className="cardDescription">
              Bebida feita com chocolate dissolvido no leite quente e café
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>ESPECIAL</span>
              <span>ALCOÓLICO</span>
              <span>GELADO</span>
            </div>

            <h3 className="cardTitle">Cubano</h3>

            <span className="cardDescription">
              Drink gelado de café expresso com rum, creme de leite e hortelã
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>ESPECIAL</span>
            </div>

            <h3 className="cardTitle">Havaiano</h3>

            <span className="cardDescription">
              Babida adocicada preparada com café e leite de coco
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>ESPECIAL</span>
            </div>

            <h3 className="cardTitle">Árabe</h3>

            <span className="cardDescription">
              Babida preparada com grãos de café árabe e especiarias
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

          <div className="cardContainer">
            <img src=""></img>

            <div className="cardTags">
              <span>ESPECIAL</span>
              <span>ALCOÓLICO</span>
            </div>

            <h3 className="cardTitle">Irlandês</h3>

            <span className="cardDescription">
              Bebida a base de café, uisque irlandês, açúcar e chantilly
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
