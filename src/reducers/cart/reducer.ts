import { ActionTypes } from './actions';

export interface Coffee {
  id: string
  image: string;
  imageAlt: string;
  title: string;
  price: number
  quantity: number
}

interface CartState {
  coffees: Coffee[]
  totalItems: number
  totalPrice: number
}

type CartActions = {
  type:
    | ActionTypes.ADD_COFFEE
    | ActionTypes.INCREASE_COFFEE
    | ActionTypes.DECREASE_COFFEE
    | ActionTypes.REMOVE_COFFEE
  payload?: {
    coffees: Coffee[]
  }
}

export function cartReducer(state: CartState, action: CartActions) {
  switch(action.type) {
    case ActionTypes.ADD_COFFEE:
      return {
        ...state,
        coffees: [...action.payload!.coffees],
        totalItems: action.payload!.coffees.reduce(
          (acc, obj) => acc + obj.quantity, 0
        ),
        totalPrice: action.payload!.coffees.reduce(
          (acc, obj) => acc + obj.price * obj.quantity, 0
        ),
      }
      
    case ActionTypes.INCREASE_COFFEE:
      return {}
      
    case ActionTypes.DECREASE_COFFEE:
      return {}

    case ActionTypes.REMOVE_COFFEE:
      return {
        ...state,
        coffees: [...action.payload!.coffees],
        totalItems: action.payload!.coffees.reduce(
          (acc, obj) => acc + obj.quantity, 0
        ),
        totalPrice: action.payload!.coffees.reduce(
          (acc, obj) => acc + obj.price * obj.quantity, 0
        ),
      }

    default:
      return state
  }
}