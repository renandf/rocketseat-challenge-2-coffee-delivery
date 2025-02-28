import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoffeeCardCart } from '../../components/CoffeeCardCart'
import { CartContext } from '../../Contexts/CartContext'
import { styledPrice } from '../../utils'
import { AddressContainer, AsideContainer, CartButton, CartContainer, CartPriceGroup, CartPriceItem, CartPriceTotal, MainContainer, PaymentContainer, WrappingContainer } from "./styles"

export function Checkout() {
  const { coffees, totalPrice } = useContext(CartContext)
  const delivery = 350
  const totalWithDelivery = totalPrice + delivery

  return (
    <>
      <WrappingContainer>
        <MainContainer>
          <h2>Complete seu pedido</h2>
          <AddressContainer></AddressContainer>

          <PaymentContainer></PaymentContainer>
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