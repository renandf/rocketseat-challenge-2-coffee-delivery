import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/logo-coffee.svg'
import { LinkCart } from '../LinkCart'
import { HeaderContainer, Location } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <nav>
        <Location>
          <MapPin size={22} />
          Porto Alegre, RS
        </Location>
        <LinkCart />
      </nav>
    </HeaderContainer>
  )
}