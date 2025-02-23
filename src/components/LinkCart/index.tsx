import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import { LinkContainer } from './styles'

export function LinkCart() {
  const { totalItems } = useContext(CartContext)

  return (
    <LinkContainer to="/checkout" title="Checkout">
      <ShoppingCart size={22} />
      <span>{totalItems <= 9 ? totalItems : '9+'}</span>
    </LinkContainer>
  )
}