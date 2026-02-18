import React from "react";

const Counter = ({ countIs, myData }) => {
  function handleCounter() {
    console.log("handleCounter called");
  }
  handleCounter();
  return (
    <>
      <h1>Count is : {countIs}</h1>
      <h2>Data is : {myData}</h2>
    </>
  );
};

export default Counter;
