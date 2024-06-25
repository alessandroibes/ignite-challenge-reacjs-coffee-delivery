export function Home() {
  return (
    <div>
      <section className="hero">
        <div className="heroContent">
          <div>
            <div className="heroHeading">
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </div>

            <div className="heroInfo">
              <div>
                <span>Compra simples e segura</span>
              </div>

              <div>
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>

          <img src="" />
        </div>
      </section>

      <section className="coffeeList">
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
      </section>
    </div>
  );
}
