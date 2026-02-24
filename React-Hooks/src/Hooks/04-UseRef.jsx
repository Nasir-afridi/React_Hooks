import React, { useEffect, useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);

  // iski value update isliye nahe hoge qq kkk component rerender hota hai to value pher sy 0 sy start hojate hai. yane iski value persit nahe hote. isiliye useRef ka use hota hai
  let value = 0;

  function handleIncrement() {
    value += 1;
    console.log("value is : ", value);
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
