import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const LinkContainer = styled(NavLink)`
  position: relative;
  padding: .5rem;
  line-height: 0;
  
  background: ${props => props.theme['yellow-light']};
  border-radius: ${props => props.theme['border-radius-md']};
  color: ${props => props.theme['yellow-dark']};
  cursor: pointer;

  transition: background-color .2s, color .2s;
  
  &:hover {
    background: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['yellow-light']};
  }

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: -0.4375rem;
    right: -0.4375rem;
    width: 1.25rem;
    height: 1.25rem;
    font-size: .75rem;
    font-weight: 700;
    line-height: 0;
    border-radius: 50%;
    
    background: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme.white};
  }
`