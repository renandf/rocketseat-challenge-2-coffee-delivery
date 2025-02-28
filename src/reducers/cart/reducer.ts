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
  type: ActionTypes.UPDATE_CART
  payload?: {
    coffees: Coffee[]
  }
}

export function cartReducer(state: CartState, action: CartActions) {
  switch(action.type) {
    case ActionTypes.UPDATE_CART:
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