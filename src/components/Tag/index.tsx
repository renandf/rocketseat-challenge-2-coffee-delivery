import { TagContainer } from './styles'

export function Tag({text = 'Café'}) {
  return (
    <TagContainer>
      {text}
    </TagContainer>
  )
}