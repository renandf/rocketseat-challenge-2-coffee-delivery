import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import imgPlaceholder from '../../assets/expresso.png'
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
  image?: string;
  imageAlt?: string;
  tags?: string[];
  title?: string;
  description?: string;
  price?: number;
}

export function CoffeeCard({
  image = imgPlaceholder,
  imageAlt = '',
  tags = ['tradicional', 'teste'],
  title = 'Expresso Tradicional',
  description = 'O tradicional café feito com água quente e grãos moídos',
  price = 500
}: CardProps) {

  const [ coffeeCount, setCoffeeCount ] = useState(1)

  function updateCoffeeCount(counter: number) {
    setCoffeeCount(counter)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // TODO: sum total and send to context
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