import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { ButtonContainer, CounterContainer, InputContainer } from './styles'

export function CounterInput() {
  const [ counter, setCounter ] = useState(1)
  const [ isMin, setIsMin ] = useState(true)
  const [ isMax, setIsMax ] = useState(false)
  
  function deacreaseNumber() {
    if (counter > 2 && counter <= 9) {
      setCounter(counter => counter - 1)
      setIsMax(false)
    } else if (counter === 2) {
      setCounter(counter => counter - 1)
      setIsMin(true)
    } else {
      setCounter(1)
      setIsMin(true)
      setIsMax(false)
    }
  }
  
  function increaseNumber() {
    if (counter >= 1 && counter < 8) {
      setCounter(counter => counter + 1)
      setIsMin(false)
    } else if (counter === 8) {
      setCounter(counter => counter + 1)
      setIsMax(true)
    } else {
      setCounter(1)
      setIsMin(true)
      setIsMax(false)
    }
  }

  return (
    <CounterContainer>
      <ButtonContainer
        disabled={isMin}
        onClick={() => deacreaseNumber()}
      >
        <Minus size={14} />
      </ButtonContainer>

      <InputContainer
        readOnly
        type="number"
        value={counter}
        step={1}
        min={1}
        max={9}
      />
      
      <ButtonContainer
        disabled={isMax}
        onClick={() => increaseNumber()}
      >
        <Plus size={14} />
      </ButtonContainer>
    </CounterContainer>
  )
}