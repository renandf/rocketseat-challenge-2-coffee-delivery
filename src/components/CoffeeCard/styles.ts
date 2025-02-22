import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  padding: 7rem 1.25rem 1.25rem;
  width: 16rem;
  text-align: center;
  background-color: ${props => props.theme['base-card']};
  border-radius:
    ${props => props.theme['border-radius-md']}
    ${props => props.theme['border-radius-lg']}
    ${props => props.theme['border-radius-md']}
    ${props => props.theme['border-radius-lg']};

  img {
    position: absolute;
    top: -1.25rem;
    left: calc(50% - 7.5rem/2);
    width: 7.5rem;
    height: 7.5rem;
  }
  p {
    font-size: .875rem;
    color: ${props => props.theme['base-label']};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
`

export const CardTitle = styled.h3`
  margin-block: 1rem .25rem;
  font-family: 'Baloo 2', 'Roboto', sans-serif;
  font-size: 1.25rem;
`

export const FormContainer = styled.form`
  margin-block-start: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    flex-grow: 1;
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
  }

  span::before {
    content: 'R$ ';
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

export const ButtonContainer = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  min-height: 2rem;
  
  background-color: ${props => props.theme['purple-dark']};
  border-radius: ${props => props.theme['border-radius-md']};
  color: ${props => props.theme.white};
  cursor: pointer;

  transition: background-color .2s;
  
  &:hover {
    background-color: ${props => props.theme['purple']};
  }
`