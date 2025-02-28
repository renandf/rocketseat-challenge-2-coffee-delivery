import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'
import { updateCartAction } from '../reducers/cart/actions'
import { cartReducer, Coffee } from '../reducers/cart/reducer'

interface CartContextType {
  coffees: Coffee[]
  totalItems: number
  totalPrice: number
  addCoffee: (obj: Coffee) => void
  updateCoffeeInCart: (id: string, operation: 'add' | 'subtract') => void
  removeCoffee: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({
  children
}: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
    totalItems: 0,
    totalPrice: 0,
  },
  (initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-coffee-delivery:cart-state-1.0.0'
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return initialState
  })

  const { coffees, totalItems, totalPrice } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@ignite-coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  // -----------------------------
  // Add coffee to cart
  // -----------------------------
  function addCoffee(data: Coffee) {
    let coffeesInCart = []
    const isCoffeeInCart = cartState.coffees.find(
      (coffee: Coffee) => coffee.id === data.id
    )

    if (cartState.coffees.length === 0) {
      coffeesInCart.push({ ...data })
    } else if (
      cartState.coffees.length !== 0 && !isCoffeeInCart
    ) {
      coffeesInCart = cartState.coffees
      coffeesInCart.push({ ...data })
    } else {
      coffeesInCart = cartState.coffees.map((coffee: Coffee) => {
        if (coffee.id === data.id) {
          return {
            ...coffee,
            quantity: coffee.quantity + data.quantity
          }
        } else {
          return coffee
        }
      })
    }

    dispatch(updateCartAction(coffeesInCart))
  }

  // -----------------------------
  // Update coffee in cart
  // -----------------------------
  function updateCoffeeInCart(id: string, operation: 'add' | 'subtract') {
    const coffeeInCart = coffees.find(coffee => coffee.id === id)
    let newQuantity:number

    if (operation === 'add')  {
      newQuantity = coffeeInCart!.quantity + 1
    } else {
      newQuantity = coffeeInCart!.quantity - 1
    }
    
    const coffeesInCart = coffees.map(coffee => {
      if (coffee.id === id) {
        return {...coffee, quantity: newQuantity}
      } else {
        return coffee
      }
    })

    dispatch(updateCartAction(coffeesInCart))
  }

  // -----------------------------
  // Remove coffee from cart
  // -----------------------------
  function removeCoffee(coffeeId: string) {
    function removeFromArray(arr: Coffee[], id: string) {
      return arr.filter(obj => obj.id !== id)
    }
    const coffeesInCart = removeFromArray(cartState.coffees, coffeeId)
    dispatch(updateCartAction(coffeesInCart))
  }

  return (
    <CartContext.Provider value={{
      coffees,
      totalItems,
      totalPrice,
      addCoffee,
      updateCoffeeInCart,
      removeCoffee,
    }}>
      {children}
    </CartContext.Provider>
  )
}
