interface button {
  content: string
}
export default function button(props: button) {
  return <button className="bg-primary">{props.content}</button>
}
