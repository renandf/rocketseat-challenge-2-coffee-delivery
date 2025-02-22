import styled from 'styled-components'

export const TagContainer = styled.span`
  padding: .25rem .5rem;
  font-size: .625rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme['yellow-dark']};
  background-color: ${props => props.theme['yellow-light']};
  border-radius: ${props => props.theme['border-radius-lg']};
`