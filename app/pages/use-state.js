import React, { useState } from 'react';

function Counter() {
  // Initialize the state variable 'count' with a default value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment
      </button>
    </div>
  );
}

export default Counter;
