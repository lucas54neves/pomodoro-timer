import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'

export const DefaultLayout = () => (
  <LayoutContainer>
    <Header />
    <Outlet />
  </LayoutContainer>
)
