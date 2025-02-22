import americano from '../../assets/americano.png'
import { CoffeeCard } from '../../components/CoffeeCard'
import { Hero } from './Hero'

export function Home() {
  return (
    <>
      <Hero />
      <CoffeeCard
        image={americano}
        imageAlt=''
        tags={['testando']}
        title='Expresso Americano'
        description='Expresso diluído, menos intenso que o tradicional'
        price={350}
      />
      <CoffeeCard tags={['café', 'expresso', 'tradicional', 'leite', 'example']} />
    </>
  )
}