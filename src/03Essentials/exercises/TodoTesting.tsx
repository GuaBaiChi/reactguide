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

// 3
// 3
// Object Destructuring
export const DUMMY_TODOS2: Todo[] = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Practice React' },
  { id: 3, text: 'Profit!' },
];

// 4
// 4
// Extracting the Mapping Logic into a Function
type Todo = {
  id: number;
  text: string;
};

function renderTodoList(todo: string, index: number) {
  return <TodoList key={index} text={todo} />;
}


export default function TodoTesting() {
  return (
    <div>
      <div className='main'>
        {/* 0 */}
        {/* 0 */}
        {/* Warning: Each child in a list should have a unique "key" prop. */}
        {/* The code will appear on the page, however the above warning will appear in the console */}
        {/* <ul>
          {DUMMY_TODOS.map((todo) => (
            <TodoList text={todo} />
          ))}
        </ul> */}
        {/* 1 */}
        {/* 1 */}
        {/* With a seperate component. Using the array 'index' as key As in the lecture */}
        {/* This is the style in the lecture */}
        <ul>
          {DUMMY_TODOS.map((todo, index) => (
            <TodoList key={index} text={todo} />
          ))}
        </ul>
        {/* 2 */}
        {/* 2 */}
        {/*  Directly using the map function without creating a separate component */}
        <ul>
          {DUMMY_TODOS.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        {/* 3 */}
        {/* 3 */}
        {/* Object Destructuring */}
        <ul>
          {DUMMY_TODOS2.map(({ text, id }) => (
            <TodoList key={id} text={text} />
          ))}
        </ul>
        <ul>
          {DUMMY_TODOS2.map(({ text }, index) => (
            <TodoList key={index} text={text} />
          ))}
        </ul>
        {/* 4 */}
        {/* 4 */}
        {/* Extracting the Mapping Logic into a Function */}
        {/* Liked when there's more logic in the component */}
        <ul>
          {DUMMY_TODOS.map(renderTodoList)}
        </ul>
      </div>
    </div>
  )
}


// Explanation:

// Separate Component with 'index' as Key: 
// This renders a list of <TodoList> components using the array index as the key.

// Directly Using Map without a Separate Component: 
// This directly renders <li> elements using the array index as the key.

// Object Destructuring: This demonstrates two cases:
// The first case uses object destructuring to extract id and text from each object in DUMMY_TODOS2.
//The second case only extracts text from each object but uses the array index as the key.

//Extracting the Mapping Logic into a Function: 
// This uses a function (renderTodoList) to encapsulate the mapping logic and then applies it to the list.

