import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, PageWrapper } from './styles'

export function DefaultLayout() {
  return (
    <PageWrapper>
      <Header />

      <LayoutContainer id='container'>
        <Outlet />
      </LayoutContainer>
    </PageWrapper>
  )
}