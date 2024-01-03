import React from 'react';
import './Todo.css'

type ToDoListProps = {
  text: string
}

function TodoList(props: ToDoListProps) {
  return <li>
    {props.text}
  </li>;
}

export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];


export default function Todo() {
  return (
    <div>
      <div className='main'>
        <ul>
          {DUMMY_TODOS.map((todo, index) => (
            <TodoList key={index} text={todo} />
          ))}
        </ul>
      </div>
    </div>
  )
}
