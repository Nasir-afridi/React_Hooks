import React, { useEffect, useState } from "react";

/*
    Life Cycle in UseEffect

    useEffect(() => {
    This code will run on mount
    }, []);

    useEffect(() => {
    This code will run on update
    }, [state or props]);

    useEffect(() => {
    return () => {
    This code will run on unmount
    };
    }, []);

    useEffect(() => {
    This code will run on every life cycle event
    });
*/

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounting phase");
  }, []); // state change ho component rerender ho ye aik he baar show hoga

  useEffect(() => {
    console.log("updated phase ");
  }, [count]);

  return (
    <>
      <h1>Count is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default UseEffect;
