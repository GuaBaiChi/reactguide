import React from 'react';
import './ConditionalContent.css'

// don't change the Component name "App"
export default function ConditionalContent() {
  const [isDeleting, setIsDeleting] = React.useState(false);

  function deleteHandler() {
    setIsDeleting(true);
  }

  function proceedHandler() {
    setIsDeleting(false);
  }

  // 1
  // 1
  // 1
  // Here, the ternary operator checks the value of isDeleting. If it's true, the JSX inside the parentheses after ? is rendered. If it's false, an empty string ('') is rendered. So, this is a way to conditionally include or exclude a piece of JSX based on a condition.
  // ?... :...

  //   return (
  //     <div>
  //       {isDeleting ? <div data-testid="alert" id="alert">
  //         <h2>Are you sure?</h2>
  //         <p>These changes can't be reverted!</p>
  //         <button onClick={proceedHandler}>Proceed</button>
  //       </div> : ''}
  //       <button onClick={deleteHandler}>Delete</button>
  //     </div>
  //   );
  // }

  // 2
  // 2
  // 2
  // or with &&
  // The div with the alert content will only be rendered if isDeleting is true. If isDeleting is false, nothing from the right side of && will be rendered.

  //   return (
  //     <div>
  //       {isDeleting && <div data-testid="alert" id="alert">
  //         <h2>Are you sure?</h2>
  //         <p>These changes can't be reverted!</p>
  //         <button onClick={proceedHandler}>Proceed</button>
  //       </div>}
  //       <button onClick={deleteHandler}>Delete</button>
  //     </div>
  //   );
  // }


  // 3
  // 3
  // 3
  // with an extra variable

  let warning;
  if (isDeleting) {
    warning = (
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div>
    );
  }

  return (
    <div>
      {warning}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

