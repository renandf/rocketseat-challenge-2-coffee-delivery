import americano from '../assets/americano.png'
import arabe from '../assets/arabe.png'
import cafeComLeite from '../assets/cafe-com-leite.png'
import cafeGelado from '../assets/cafe-gelado.png'
import capuccino from '../assets/capuccino.png'
import chocolateQuente from '../assets/chocolate-quente.png'
import cubano from '../assets/cubano.png'
import cremoso from '../assets/expresso-cremoso.png'
import expresso from '../assets/expresso.png'
import havaiano from '../assets/havaiano.png'
import irlandes from '../assets/irlandes.png'
import latte from '../assets/latte.png'
import macchiato from '../assets/macchiato.png'
import mochaccino from '../assets/mochaccino.png'

export const coffees = [
  {
    id: 'expresso',
    image: expresso,
    imageAlt: '',
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 800,
  },
  {
    id: 'americano',
    image: americano,
    imageAlt: '',
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 650,
  },
  {
    id: 'cremoso',
    image: cremoso,
    imageAlt: '',
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 850,
  },
  {
    id: 'cafeGelado',
    image: cafeGelado,
    imageAlt: '',
    tags: ['Tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 850,
  },
  {
    id: 'cafeComLeite',
    image: cafeComLeite,
    imageAlt: '',
    tags: ['Tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 900,
  },
  {
    id: 'latte',
    image: latte,
    imageAlt: '',
    tags: ['Tradicional', 'com leite'],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 950,
  },
  {
    id: 'capuccino',
    image: capuccino,
    imageAlt: '',
    tags: ['Tradicional', 'com leite'],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 950,
  },
  {
    id: 'macchiato',
    image: macchiato,
    imageAlt: '',
    tags: ['Tradicional', 'com leite'],
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 900,
  },
  {
    id: 'mochaccino',
    image: mochaccino,
    imageAlt: '',
    tags: ['Tradicional', 'com leite'],
    title: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 990,
  },
  {
    id: 'chocolateQuente',
    image: chocolateQuente,
    imageAlt: '',
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 1050,
  },
  {
    id: 'cubano',
    image: cubano,
    imageAlt: '',
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 1400,
  },
  {
    id: 'havaiano',
    image: havaiano,
    imageAlt: '',
    tags: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 1000,
  },
  {
    id: 'arabe',
    image: arabe,
    imageAlt: '',
    tags: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 850,
  },
  {
    id: 'irlandes',
    image: irlandes,
    imageAlt: '',
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 1400,
  }
]