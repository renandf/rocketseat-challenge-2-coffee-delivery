import styled from 'styled-components'

export type HighlightVariant = 'yellow-dark' | 'yellow' | 'base-text' | 'purple'

interface HighlightContainerProps {
  variant: HighlightVariant
}

export const HeroContainer = styled.section`
  display: flex;
  gap: 3rem;
  padding: 6rem 0;

  h1 {
    margin-block-end: 1rem;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImgContainer = styled.div`
  text-align: center;

  img {
    max-width: 100%;

    @media (max-width: 768px) {
      max-width: 320px;
    }
  }
`

export const HighlightsContainer = styled.div`
  margin-block-start: 4rem;
  display: grid;
  grid: auto-flow / 1fr 1fr;
  gap: 1rem 2rem;

  @media (max-width: 768px) {
    margin-block-start: 2rem;
    margin-inline-start: 1rem;
    grid: auto-flow / 1fr;
    gap: .75rem;
  }
`

export const HighlightItem = styled.div<HighlightContainerProps>`
  display: flex;
  gap: .75rem;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${props => props.theme[props.variant]};
    color: ${props => props.theme.white};
  }
`