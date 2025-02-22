import styled from 'styled-components'

export const CounterContainer = styled.div`
  /* padding: 0 .5rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background-color: ${props => props.theme['base-button']};
  border-radius: ${props => props.theme['border-radius-md']};
  `

export const InputContainer = styled.input`
  border: 0;
  width: 1.5rem;
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
  cursor: pointer;
  transition: background-color .2s;
  
  &:disabled {
    opacity: .2;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background-color: ${props => props.theme['base-hover']};;
    color: ${props => props.theme['purple-dark']};
  }

  &:first-of-type {
    padding-inline-start: .5rem;
    border-radius:
      ${props => props.theme['border-radius-md']}
      0
      0
      ${props => props.theme['border-radius-md']};
  }

  &:last-of-type {
    padding-inline-end: .5rem;
    border-radius:
      0
      ${props => props.theme['border-radius-md']}
      ${props => props.theme['border-radius-md']}
      0;
  }
`