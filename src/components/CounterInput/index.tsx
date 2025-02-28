import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { ButtonContainer, CounterContainer, InputContainer } from './styles';

interface CounterInputProps {
  count: number;
  updateCoffeeCount?: (counter: number) => void;
  updateCoffeeInCart?: (counter: number) => void;
}

export function CounterInput({ count, updateCoffeeCount }: CounterInputProps) {
  const [ counter, setCounter ] = useState(count)
  const [ isMin, setIsMin ] = useState(count <= 1 ? true : false)
  const [ isMax, setIsMax ] = useState(count >= 99 ? true : false)
  
  function deacreaseNumber(e: React.FormEvent) {
    e.preventDefault()
    const updatedCounter = counter - 1

    if (counter > 2 && counter <= 99) {
      setCounter(updatedCounter)
      setIsMax(false)
    } else if (counter === 2) {
      setCounter(updatedCounter)
      setIsMin(true)
    } else {
      setCounter(1)
      setIsMin(true)
      setIsMax(false)
    }

    if (updateCoffeeCount) {
      updateCoffeeCount(updatedCounter)
    }
  }
  
  function increaseNumber(e: React.FormEvent) {
    e.preventDefault()
    const updatedCounter = counter + 1

    if (counter >= 1 && counter < 98) {
      setCounter(updatedCounter)
      setIsMin(false)
    } else if (counter === 98) {
      setCounter(updatedCounter)
      setIsMax(true)
    } else {
      setCounter(1)
      setIsMin(true)
      setIsMax(false)
    }

    if (updateCoffeeCount) {
      updateCoffeeCount(updatedCounter)
    }
  }

  return (
    <CounterContainer>
      <ButtonContainer
        disabled={isMin}
        onClick={deacreaseNumber}
      >
        <Minus size={14} />
      </ButtonContainer>

      <InputContainer
        readOnly
        type="number"
        value={counter}
        step={1}
        min={1}
        max={99}
      />
      
      <ButtonContainer
        disabled={isMax}
        onClick={increaseNumber}
      >
        <Plus size={14} />
      </ButtonContainer>
    </CounterContainer>
  )
}