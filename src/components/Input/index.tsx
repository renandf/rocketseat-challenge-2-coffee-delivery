import { InputContainer } from "./styles";

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
// }

export function Input ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputContainer {...props} />
  )
}