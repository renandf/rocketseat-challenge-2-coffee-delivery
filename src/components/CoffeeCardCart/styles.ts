import styled from 'styled-components'

export const CoffeeCardCartContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-block-end: 1px solid ${props => props.theme['base-button']};

  &:first-of-type {
    padding-block-start: 0;
  }

  img {
    width: 100%;
    max-width: 4rem;
    max-height: 4rem;
  }
`

export const MainContent = styled.div`
  flex-grow: 1;
`

export const TitleAndPrice = styled.div`
  display: flex;
  gap: .5rem;
  margin-block-end: .5rem;

  p {
    flex-grow: 1;
  }

  span {
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: .5rem;
`

export const RemoveButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: .25rem;
  background-color: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-subtitle']};
  border-radius: ${props => props.theme['border-radius-md']};
  padding: 0 .5rem;
  border: 0;
  font-size: .75rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color .2s, color .2s;

  svg {
    color: ${props => props.theme['purple']};
  }

  &:hover {
    background-color: ${props => props.theme['base-hover']};

    svg {
      color: ${props => props.theme['purple-dark']};
    }
  }
`

