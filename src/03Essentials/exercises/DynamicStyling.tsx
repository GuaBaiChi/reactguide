// Section 3 Exercise 11
import React from 'react';
import './DynamicStyling.css'

export default function DynamicStyling() {
  const [highlighted, setHighlighted] = React.useState(false);

  function handleClick() {
    setHighlighted(isHighlighted => !isHighlighted);
  }

  return (
    <div>
      <p className={highlighted ? 'active' : undefined}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}