import { ShoppingCart } from 'phosphor-react'
import { LinkContainer } from './styles'

export function LinkCart() {
  return (
    <LinkContainer to="/checkout" title="Checkout">
      <ShoppingCart size={22} />
      <span>9+</span>
    </LinkContainer>
  )
}