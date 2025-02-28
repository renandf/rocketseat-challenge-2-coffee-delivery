import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Contexts/CartContext'
import { LinkContainer } from './styles'

export function LinkCart() {
  const { totalItems } = useContext(CartContext)

  return (
    <Link to="/checkout">
      <LinkContainer disabled={!totalItems}>
        <ShoppingCart size={22} />
        <span>{totalItems <= 9 ? totalItems : '9+'}</span>
      </LinkContainer>
    </Link>
  )
}