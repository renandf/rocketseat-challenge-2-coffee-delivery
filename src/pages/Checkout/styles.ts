import styled from 'styled-components'

export const WrappingContainer = styled.div`
  display: flex;
  gap: 2rem;

  h2 {
    padding-block-end: 1rem;
  }
`

export const MainContainer = styled.main`
  width: 100%;
  max-width: 40rem;
`

export const AsideContainer = styled.aside`
  width: 100%;
  max-width: 28rem;
`

const Base = styled.div`
  padding: 2.5rem;
  background-color: ${props => props.theme['base-card']};
  border-radius: ${props => props.theme['border-radius-md']};
`

export const AddressContainer = styled(Base)`
  margin-block-end: .75rem;
`

export const PaymentContainer = styled(Base)``

export const CartContainer = styled(Base)`
  
  border-radius:
    ${props => props.theme['border-radius-md']}
    ${props => props.theme['border-radius-lg']}
    ${props => props.theme['border-radius-md']}
    ${props => props.theme['border-radius-lg']};
`