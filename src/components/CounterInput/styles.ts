import styled from 'styled-components'

export const FormContainer = styled.form`
  padding: 2px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background-color: ${props => props.theme['base-button']};
  border-radius: ${props => props.theme['border-radius-md']};
  `

export const InputContainer = styled.input`
  border: 0;
  width: 2rem;
  height: 2rem;
  text-align: center;
  background-color: transparent;

  /* Remove the input[number] default arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1rem;
  height: 2rem;
  padding: .125rem;
  border: 0;
  background-color: transparent;
  color: ${props => props.theme['purple']};
`