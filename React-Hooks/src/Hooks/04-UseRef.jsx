import React, { useEffect, useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);

  /*
  UseRef Theory
    useRef ek React hook hai jo ek mutable object return karta hai.
    Is object ke andar sirf ek property hoti hai: `.current`.
    Jo initial value hum useRef() ko dete hain, wo `.current` mein store ho jati hai.
    Hum `.current` ki value ko change kar sakte hain.
    Sabse important baat: `.current` ki value change karne par component re-render nahi hota.
    Lekin ye value re-renders ke darmiyan persist rehti hai (reset nahi hoti).
    Is liye useRef un values ke liye use hota hai jo yaad rakhni ho lekin UI update na karni ho.
   */
  let value = useRef(0);

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
