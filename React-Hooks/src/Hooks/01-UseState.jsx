/*
State is a special variable in React that stores data for a component.

It cannot be updated directly; you must use the provided setter function (like setState or setCount).

State updates are asynchronous — React batches updates for performance.

Changing state triggers React to re-render the component, so the updated data appears on the UI.

useState must be imported from React when using function components:
import { useState } from 'react';

Do not confuse state with normal variables: updating a normal variable does not trigger re-render.
*/


import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <h1>You Click {count} Times </h1>
      <button onClick={increment}>+1</button>
      <br />
      <br />
      <button onClick={decrement}>-1</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
      <h1>You Typed : {text}</h1>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default UseState;
