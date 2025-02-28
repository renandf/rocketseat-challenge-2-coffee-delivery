import { useContext } from 'react'
import { CoffeeCardCart } from '../../components/CoffeeCardCart'
import { CartContext } from '../../Contexts/CartContext'
import { styledPrice } from '../../utils'
import { AddressContainer, AsideContainer, CartContainer, CartPriceGroup, CartPriceItem, CartPriceTotal, MainContainer, PaymentContainer, WrappingContainer } from "./styles"

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
          </CartContainer>
        </AsideContainer>
      </WrappingContainer>
    </>
  )
}