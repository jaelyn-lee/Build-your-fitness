interface button {
  content: string
  onClick?: () => void
}
export default function button(props: button) {
  return (
    <button className="bg-primary" onClick={props.onClick}>
      {props.content}
    </button>
  )
}
