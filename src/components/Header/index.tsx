import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'

export const Header = () => (
  <HeaderContainer>
    <span>
      <img src={logoIgnite} alt="" />
    </span>
    <nav>
      <NavLink to="/" title="Timer">
        <Timer size={24} />
      </NavLink>
      <NavLink to="history" title="History">
        <Scroll size={24} />
      </NavLink>
    </nav>
  </HeaderContainer>
)
