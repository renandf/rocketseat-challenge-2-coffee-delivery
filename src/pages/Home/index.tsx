import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from './coffees.ts'
import { Hero } from './Hero'
import { CoffeesContainer } from './styles.ts'

export function Home() {
  return (
    <>
      <Hero />

      <h2>Nossos cafés</h2>
      
      <CoffeesContainer>
        {coffees.map(coffee => {
          return (
            <CoffeeCard
              key={coffee.id}
              image={coffee.image}
              imageAlt={coffee.imageAlt}
              tags={coffee.tags}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
            />
          )
        })}
      </CoffeesContainer>
    </>
  )
}