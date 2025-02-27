import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import { styledPrice } from '../../utils'
import { CounterInput } from '../CounterInput'
import { ActionsContainer, CoffeeCardCartContainer, MainContent, RemoveButtonContainer, TitleAndPrice } from './styles'

interface CardProps {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  price: number;
  quantity: number;
}

export function CoffeeCardCart({
  id,
  image,
  imageAlt,
  title,
  price,
  quantity,
}: CardProps) {

  const { removeCoffee } = useContext(CartContext)

  function removeCoffeeFromCart(id: string) {
    console.log(id)

    removeCoffee(id)
  }
  return (
    <CoffeeCardCartContainer id={id}>
      <img src={image} alt={imageAlt} />
      <MainContent>
        <TitleAndPrice>
          <p>{title}</p>
          <span>{styledPrice(price)}</span>
        </TitleAndPrice>
        <ActionsContainer>
          <CounterInput
            count={quantity}
            // updateCoffeeInCart={updateCoffeeInCart}
          />
          <RemoveButtonContainer
            onClick={() => removeCoffeeFromCart(id)}
          >
            <Trash size={16} />
            Remove
          </RemoveButtonContainer>
        </ActionsContainer>
      </MainContent>
    </CoffeeCardCartContainer>
  )
}