import logoCoffee from '../../assets/logo-coffee.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      
    </HeaderContainer>
  )
}