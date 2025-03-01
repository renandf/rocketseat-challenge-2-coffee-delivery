import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoffeeCardCart } from '../../components/CoffeeCardCart'
import { Input } from '../../components/Input'
import { CartContext } from '../../Contexts/CartContext'
import { styledPrice } from '../../utils'
import { AddressContainer, AddressForm, AsideContainer, CartButton, CartContainer, CartPriceGroup, CartPriceItem, CartPriceTotal, MainContainer, PaymentContainer, SectionTitle, WrappingContainer } from "./styles"

export function Checkout() {
  const { coffees, totalPrice } = useContext(CartContext)
  const delivery = 350
  const totalWithDelivery = totalPrice + delivery

  return (
    <>
      <WrappingContainer>
        <MainContainer>
          <h2>Complete seu pedido</h2>
          <AddressContainer>
            <SectionTitle>
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <small>Informe o endereço onde deseja receber seu pedido</small>
              </div>
            </SectionTitle>
            <AddressForm>
              <Input id="cep" type="number" placeholder="CEP" max={99999999} required />
              <Input id="rua" type="text" placeholder="Rua" required />
              <Input id="numero" type="text" placeholder="Número" required />
              <Input id="complemento" type="text" placeholder="Complemento" />
              <Input id="bairro" type="text" placeholder="Bairro" required />
              <Input id="cidade" type="text" placeholder="Cidade" required />
              <Input id="uf" type="text" placeholder="UF" minLength={2} maxLength={2} required />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <SectionTitle>
                <CurrencyDollar size={22} />
                <div>
                  <p>Pagamento</p>
                  <small>O pagamento é feito na entrega. Escolha a forma que deseja pagar</small>
                </div>
              </SectionTitle>
          </PaymentContainer>
        </MainContainer>
        
        <AsideContainer>
        <h2>Cafés selecionados</h2>
          { coffees.length === 0 ? (
            <CartContainer>
              <p>Seu carrinho está vazio. Retorne à Home e adicione um ou mais de nossos cafés.</p>
              <Link to="/">
                <CartButton>Voltar pra Home</CartButton>
              </Link>
            </CartContainer>
          ) : (
            <CartContainer>
              <div>
                {coffees.map(coffee => {
                  return (
                    <CoffeeCardCart
                      key={coffee.id}
                      id={coffee.id}
                      image={coffee.image}
                      imageAlt={coffee.imageAlt}
                      title={coffee.title}
                      price={coffee.price}
                      quantity={coffee.quantity}
                    />
                  )
                })}
              </div>
  
              <CartPriceGroup>
                <CartPriceItem>
                  <p>Total de itens</p>
                  <span>{styledPrice(totalPrice)}</span>
                </CartPriceItem>
                <CartPriceItem>
                  <p>Entrega</p>
                  <span>{styledPrice(delivery)}</span>
                </CartPriceItem>
                <CartPriceTotal>
                  <p>Total</p>
                  <span>{styledPrice(totalWithDelivery)}</span>
                </CartPriceTotal>
              </CartPriceGroup>
              <CartButton disabled>Confirmar pedido</CartButton>
            </CartContainer>
          )}
        </AsideContainer>
      </WrappingContainer>
    </>
  )
}