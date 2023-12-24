import React from 'react';

type User = {
  name: string;
};

export const user: User = {
  name: '',
};

function CreateUser() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(event: React.MouseEvent<HTMLButtonElement>) {
    // Access the input value directly from the event object
    const inputElement = document.querySelector<HTMLInputElement>('input[type="text"]');

    // Use nullish coalescing operator to provide a default value if inputElement is null
    user.name = inputElement?.value ?? '';
    console.log('User created:', user);
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={handleCreateUser}>Create User</button>
      </p>
    </div>
  );
}

export default CreateUser;
