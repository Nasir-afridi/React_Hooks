import React, { useEffect, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  // jbbhe state change hoge comp render hoga ye chalayga.
  useEffect(() => {
    console.log("runs on every render");
  });

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseRef;
