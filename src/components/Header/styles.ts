import styled from 'styled-components'

export const HeaderContainer = styled.header`
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