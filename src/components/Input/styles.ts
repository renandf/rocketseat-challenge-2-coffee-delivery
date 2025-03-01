import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 100%;
  padding: .75rem;
  border: 1px solid transparent;
  border-radius: ${props => props.theme['border-radius-sm']};
  background-color: ${props => props.theme['base-input']};
  
  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`