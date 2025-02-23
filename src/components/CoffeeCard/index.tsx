import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import imgPlaceholder from '../../assets/expresso.png'
import { CartContext } from '../../Contexts/CartContext.tsx'
import { CounterInput } from '../CounterInput'
import { Tag } from '../Tag'
import {
  ButtonContainer,
  CardContainer,
  CardTitle,
  FormContainer,
  TagsContainer
} from './styles'

interface CardProps {
  id?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  title?: string;
  description?: string;
  price?: number;
}

export function CoffeeCard({
  id = 'expresso',
  image = imgPlaceholder,
  imageAlt = '',
  tags = ['tradicional'],
  title = 'Expresso Tradicional',
  description = 'O tradicional café feito com água quente e grãos moídos',
  price = 800
}: CardProps) {

  const { addCoffee } = useContext(CartContext)

  const [ coffeeCount, setCoffeeCount ] = useState(1)

  function updateCoffeeCount(counter: number) {
    setCoffeeCount(counter)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const coffeeToAdd = {
      id,
      price,
      quantity: coffeeCount
    }

    addCoffee(coffeeToAdd)
  }

  const styledPrice = (price / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})

  return (
    <CardContainer>
      <img src={image} alt={imageAlt} />
      <TagsContainer>
        {tags.map(tag => {
          return (
            <Tag key={tag} text={tag} />
          )
        })}
      </TagsContainer>
      <CardTitle>{title}</CardTitle>
      <p>{description}</p>

      <FormContainer onSubmit={handleSubmit}>
        <span>{styledPrice}</span>
        <CounterInput
          count={coffeeCount}
          updateCoffeeCount={updateCoffeeCount}
        />
        <ButtonContainer type='submit'>
          <ShoppingCart size={20} />
        </ButtonContainer>
      </FormContainer>
    </CardContainer>
  )
}