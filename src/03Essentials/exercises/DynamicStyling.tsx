// Section 3 Exercise 11
import React from 'react';
import './DynamicStyling.css'


export default function DynamicStyling() {
  const [isToggled, setIsToggled] = React.useState(false)

  function toggleHandler() {
    setIsToggled(isToggled => !isToggled)
  }

  return (
    <div>
      <p className={isToggled ? 'active' : undefined}>Style me!</p>
      <button onClick={toggleHandler}>Toggle style</button>
    </div>
  );
}