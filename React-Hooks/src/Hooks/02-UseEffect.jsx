import React, { useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  // button ko click krny pp function hamesha call hoga q k component rerender horha hai isiliye function be pher sy call horha hai isko side effect bolty hain or ye useeffect sy handle hoga.
  function callOnce() {
    console.log("CallOnce");
  }
  callOnce();
  return (
    <>
      <h1>Counting is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </>
  );
};

export default UseEffect;
