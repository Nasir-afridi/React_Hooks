/*
==================================================
useEffect Hook – Simple Explanation
==================================================

useEffect is a React Hook.
It is used to handle side effects in a component.

Side effects are actions that happen after rendering, like:
- API calls
- Timers (setTimeout / setInterval)
- Event listeners
- Subscriptions
- DOM updates

--------------------------------------------------
When does useEffect run?
--------------------------------------------------

useEffect runs AFTER the component renders
and the DOM is updated.

--------------------------------------------------
Basic Structure
--------------------------------------------------

useEffect(() => {

  // 1. Effect logic (side effect code)

  return () => {
    // 2. Cleanup logic (optional)
  };

}, [dependencies]);

It has 3 parts:
1. Effect function
2. Cleanup function (optional)
3. Dependency array

--------------------------------------------------
Dependency Array Rules
--------------------------------------------------

1) No dependency array
   → Runs on every render

2) Empty array []
   → Runs only once (on first render)

3) With dependencies [value]
   → Runs on first render
   → Runs again when that value changes

React checks dependencies using shallow comparison.

--------------------------------------------------
Cleanup Function
--------------------------------------------------

The cleanup function runs:
- When the component unmounts
- Before the effect runs again (if dependencies change)

Used for:
- Clearing intervals
- Removing event listeners
- Cancelling subscriptions

--------------------------------------------------
Important Notes
--------------------------------------------------

- Objects, arrays, and functions change reference easily.
- If their reference changes, the effect runs again.
- Missing dependencies can cause stale data bugs.
- Wrong dependencies can cause infinite loops.

Think of useEffect as:
"Run this code when these values change."
*/

import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    counter();
  }, [count]); // Use effect mein 2 parameters hoty hain.

  useEffect(() => {
    callOnce();
  }, [data]);

  function callOnce() {
    console.log("CallOnce");
  } // button ko click krny pp function hamesha call hoga q k component rerender horha hai isiliye function be pher sy call horha hai isko side effect bolty hain or ye useeffect sy handle hoga.

  function counter() {
    console.log("Counter is : ", count);
  }

  return (
    <>
      <h1>
        Counting is : {count} {data}
      </h1>

      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </>
  );
};

export default UseEffect;
