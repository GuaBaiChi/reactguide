import { MouseEventHandler } from "react"

type TabButtonProps = {
  children?: string
  label?: string
  onSelect?: MouseEventHandler<HTMLButtonElement>
  isSelected?: boolean
}

export default function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
  console.log('TABBUTTON COMPONENT EXECUTING')
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
    </li>
  )
}

export function TabButton2(props: TabButtonProps) {
  return <li><button onClick={props.onSelect}>{props.label}</button></li>
}

export function TabButton3(props: TabButtonProps) {
  console.log('TABBUTTON COMPONENT EXECUTING')
  return (
    <li>
      <button className="active" onClick={props.onSelect}>{props.children}</button>
    </li>
  )
}