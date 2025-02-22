import { MapPin } from 'phosphor-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/logo-coffee.svg'
import { LinkCart } from '../LinkCart'
import { HeaderContainer, HeaderWrapper, Location } from './styles'

export function Header() {
  const [ isSticky, setIsSticky ] = useState(false)

  function stickHeader() {
    if (window.scrollY >= 120) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  window.addEventListener('scroll', stickHeader)

  return (
    <HeaderWrapper className={isSticky ? 'sticky' : ''}>
      <HeaderContainer>
        <NavLink to='/' title='Home'>
          <img src={logoCoffee} alt='' />
        </NavLink>
        <nav>
          <Location>
            <MapPin size={22} />
            Porto Alegre, RS
          </Location>
          <LinkCart />
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  )
}