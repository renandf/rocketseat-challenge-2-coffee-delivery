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

export const SectionTitle = styled.div`
  display: flex;
  gap: .5rem;

  p {
    color: ${props => props.theme['base-subtitle']};
  }

  small {
    color: ${props => props.theme['base-text']};
    font-size: .875rem;
  }

  svg {
    color: ${props => props.theme['purple']};
  }
`

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme['border-radius-md']};
`

export const AddressContainer = styled(Base)`
  margin-block-end: .75rem;
`

export const AddressForm = styled.form`
  display: grid;
  gap: 1rem .75rem;
  grid-template-columns: 3.25fr 4.5fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "cep . ."
    "rua rua rua"
    "numero complemento complemento"
    "bairro cidade uf";

  input#cep{
    grid-area: cep;

    /* Remove the input[number] default arrows */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  input#rua{
    grid-area: rua;
  }

  input#numero{
    grid-area: numero;
  }

  input#complemento{
    grid-area: complemento;
  }

  input#bairro{
    grid-area: bairro;
  }

  input#cidade{
    grid-area: cidade;
  }

  input#uf{
    grid-area: uf;
    text-transform: uppercase;
  }
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

export const CartButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: ${props => props.theme['yellow']};
  color: ${props => props.theme.white};
  border-radius: ${props => props.theme['border-radius-md']};
  padding: .75rem .5rem;
  border: 0;
  font-size: .875rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color .2s, color .2s;

  &:hover {
    background-color: ${props => props.theme['yellow-dark']};
  }

  &:disabled {
    background-color: ${props => props.theme['base-card']};
    color: ${props => props.theme['base-hover']};
    cursor: not-allowed;
  }
`