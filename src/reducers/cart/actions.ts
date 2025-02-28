import { Coffee } from './reducer'

export enum ActionTypes {
  UPDATE_CART = 'UPDATE_CART',
}

export function updateCartAction(coffees: Coffee[]) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      coffees
    }
  }
}