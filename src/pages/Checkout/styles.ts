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
  background-color: ${props => props.theme.white};
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


export const CartPriceGroup = styled.div`
  padding-block-start: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: .75rem;
`

const CartPriceBase = styled.div`
  display: flex;
  gap: 1rem;

  :first-child {
    flex-grow: 1;
  }
`
export const CartPriceItem = styled(CartPriceBase)`
`

export const CartPriceTotal = styled(CartPriceBase)`
  font-size: 1.25rem;
  font-weight: 700;
`