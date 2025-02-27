import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  INCREASE_COFFEE = 'INCREASE_COFFEE',
  DECREASE_COFFEE = 'DECREASE_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export function addCoffeeAction(coffees: Coffee[]) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      coffees
    }
  }
}

export function increaseCoffeeAction() {
  return {
    type: ActionTypes.INCREASE_COFFEE,
  }
}

export function decreaseCoffeeAction() {
  return {
    type: ActionTypes.DECREASE_COFFEE,
  }
}

export function removeCoffeeAction(coffees: Coffee[]) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffees
    }
  }
}