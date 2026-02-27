import React, { useEffect, useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);

  /*

    ===========================
    useRef – Theory
    ===========================

    useRef ek React hook hai jo ek mutable object return karta hai.

    Syntax:
    const myRef = useRef(initialValue);

    🔹 Ye object sirf ek property rakhta hai:
    myRef.current

    🔹 Jo initial value hum useRef() ko dete hain,
    wo .current mein store ho jati hai.

    🔹 Hum .current ki value ko manually change kar sakte hain.

    🔹 Sabse important:
    .current ki value change karne par component re-render nahi hota.

    🔹 Lekin ye value har re-render ke darmiyan persist rehti hai
    (reset nahi hoti).

    ----------------------------------------
    📌 useRef vs useState
    ----------------------------------------

    useState:
    - State store karta hai
    - Update par component re-render hota hai
    - UI update ke liye use hota hai

    useRef:
    - Mutable value store karta hai
    - Update par re-render nahi hota
    - Internal reference ya non-UI data ke liye use hota hai

    ----------------------------------------
    📌 Main Use Cases
    ----------------------------------------

    1️⃣ Direct DOM Access
    - Input focus karna
    - Scroll control
    - Element measure karna

    2️⃣ Value Persist Karna Without Re-render
    - Previous value store karna
    - setInterval ID store karna
    - Render count track karna

    ----------------------------------------
    📌 Important Concept

    React har render par component function dobara chalata hai,
    lekin useRef ka object same reference rehta hai.
    Is liye ye values ko safely persist karta hai bina UI ko update kiye.

    ----------------------------------------

    Conclusion:
    useRef un values ke liye best hai jo yaad rakhni ho
    lekin jin ki wajah se UI update nahi karni.

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
