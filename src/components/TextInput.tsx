import "./TextInput.scss"

export interface TextInputProps {
  className?: string
  label: string
  placeholder: string
  onChange?: (e: any) => void
}

export const TextInput = (props: TextInputProps) => {
  return (
    <div className={`text-input ${props.className ? props.className : ""}`}>
      <label htmlFor={props.label}>{props.label}</label>
      <input id={props.label} type={"text"} placeholder={props.placeholder} />
    </div>
  )
}
