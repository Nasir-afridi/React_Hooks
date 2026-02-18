import React, { useEffect } from "react";

const Counter = ({ countIs, myData }) => {
  useEffect(() => {
    handleCounter();
  }, []); // abb ye sirf aik baar chalayga

  function handleCounter() {
    console.log("handleCounter called");
  }

  return (
    <>
      <h1>Count is : {countIs}</h1>
      <h2>Data is : {myData}</h2>
    </>
  );
};

export default Counter;
