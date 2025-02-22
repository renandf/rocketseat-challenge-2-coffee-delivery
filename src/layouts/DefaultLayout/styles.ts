import styled from 'styled-components'
import bg from '../../assets/hero-bg.svg'

export const PageWrapper = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: 50% 0;
  min-height: 100dvh;
`

export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 74rem;
  padding: 1rem 2.5rem 2.5rem;

  display: flex;
  flex-direction: column;
`