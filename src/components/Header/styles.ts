import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  padding-block: 2.5rem;
  transition-property: background-color, padding-block, box-shadow;
  transition-timing-function: ease-in-out;
  transition-duration: .4s;
  transition-delay: .2s;
  
  &.sticky {
    padding-block: 1rem;
    background-color: ${props => props.theme.white};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .12);
  }
`

export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 74rem;
  padding-inline: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 40px;
  }

  nav {
    display: flex;
    gap: .5rem;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: .5rem;
  line-height: 0;
  font-size: .875rem;
  
  background: ${props => props.theme['purple-light']};
  border-radius: ${props => props.theme['border-radius-md']};
  color: ${props => props.theme['purple-dark']}
`