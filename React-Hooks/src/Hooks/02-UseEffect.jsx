import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    callOnce();
  }, []); // Use effect mein 2 parameters hoty hain.

  function callOnce() {
    console.log("CallOnce");
  } // button ko click krny pp function hamesha call hoga q k component rerender horha hai isiliye function be pher sy call horha hai isko side effect bolty hain or ye useeffect sy handle hoga.

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
