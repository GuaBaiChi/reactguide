// Section 3 Exercise 11
import React from 'react';
import './DynamicStyling.css'

type buttonProps = {
  isSelected?: boolean
}

export default function DynamicStyling(props: buttonProps) {
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