import React from 'react';
import './ConditionalContent.css'

export default function ConditionalContent() {
  const [isChanged, setIsChanged] = React.useState(false)

  function proceedHandler() {
    setIsChanged(false)
  }

  function deleteHandler() {
    setIsChanged(true)
  }

  return (
    <div>
      {isChanged &&
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
      }
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}