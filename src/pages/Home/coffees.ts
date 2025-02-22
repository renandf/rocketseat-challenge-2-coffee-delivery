import americano from '../../assets/americano.png'
import arabe from '../../assets/arabe.png'
import expresso from '../../assets/expresso.png'
// import cafeComLeite from '../../assets/cafe-com-leite.png'
// import cafeGelado from '../../assets/cafe-gelado.png'

export const coffees = [
  {
    id: 'expresso',
    image: expresso,
    imageAlt: '',
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 900,
  },
  {
    id: 'americano',
    image: americano,
    imageAlt: '',
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 950,
  },
  {
    id: 'arabe',
    image: arabe,
    imageAlt: '',
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
  }
]