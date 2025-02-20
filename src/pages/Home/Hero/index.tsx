import {
  Coffee,
  Package,
  ShoppingCart,
  Timer
} from 'phosphor-react'
import heroImg from '../../../assets/home.png'
import {
  HeroContainer,
  HighlightItem,
  HighlightsContainer,
  HighlightVariant,
  ImgContainer
} from './styles'

interface HighlightItemProps {
  variant?: HighlightVariant
}

export function Hero({ variant = 'yellow-dark' }: HighlightItemProps) {
  return (
    <HeroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <HighlightsContainer>
          <HighlightItem variant={variant}>
            <span>
              <ShoppingCart size={16} />
            </span>
            Compra simples e segura
          </HighlightItem>
          <HighlightItem variant="yellow">
            <span>
              <Package size={16} />
            </span>
            Embalagem mantém o café intacto
          </HighlightItem>
          <HighlightItem variant="base-text">
            <span>
              <Timer size={16} />
            </span>
            Entrega rápida e rastreada
          </HighlightItem>
          <HighlightItem variant="purple">
            <span>
              <Coffee size={16} />
            </span>
            O café chega fresquinho até você
          </HighlightItem>
        </HighlightsContainer>
      </div>

      <ImgContainer>
        <img src={heroImg} alt="" />
      </ImgContainer>
    </HeroContainer>
  )
}