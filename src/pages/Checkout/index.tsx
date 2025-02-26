import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContext"
import { AddressContainer, AsideContainer, CartContainer, MainContainer, PaymentContainer, WrappingContainer } from "./styles"

export function Checkout() {
  const { coffees } = useContext(CartContext)

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
                <div>{coffee.id} x{coffee.quantity}</div>
              )
            })}
          </CartContainer>
        </AsideContainer>
      </WrappingContainer>
    </>
  )
}