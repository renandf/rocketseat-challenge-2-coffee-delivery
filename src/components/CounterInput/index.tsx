import { Minus, Plus } from 'phosphor-react'
import { ButtonContainer, FormContainer, InputContainer } from './styles'

export function CounterInput() {
  return (
    <FormContainer>
      <ButtonContainer>
        <Minus size={14} />
      </ButtonContainer>

      <InputContainer
        type="number"
        value={1}
        step={1}
      />
      
      <ButtonContainer>
        <Plus size={14} />
      </ButtonContainer>
    </FormContainer>
  )
}