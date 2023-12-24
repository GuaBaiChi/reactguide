import { MouseEventHandler } from "react"

type TabButtonProps = {
  children?: string
  label?: string
  onSelect?: MouseEventHandler<HTMLButtonElement>
}

export default function TabButton(props: TabButtonProps) {
  return <li><button onClick={props.onSelect}>{props.children}</button></li>
}

export function TabButton2(props: TabButtonProps) {
  return <li><button onClick={props.onSelect}>{props.label}</button></li>
}