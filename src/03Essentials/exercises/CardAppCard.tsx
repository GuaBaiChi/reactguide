import React from 'react'
import './index.css'

type CardProps = {
  children: React.ReactNode
  name: string,
  href: string
}

export default function Card(props: CardProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.children}</p>
      <a href={props.href}>{props.href}</a>
    </div>
  )
}