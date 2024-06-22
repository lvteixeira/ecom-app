import React, { useState } from 'react';

const CounterWidget = () => {
  const [count, setCount] = useState(0);
  return(
    <>
      <h1>Counter Widget</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count >= 0 ? count+1 : count)}>Increment</button>
      <button onClick={() => setCount(count > 0 ? count-1 : count)}>Decrement</button>
    </>
  );
}

export default CounterWidget;