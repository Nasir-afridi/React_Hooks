import React, { useEffect } from "react";

const Counter = ({ countIs, myData }) => {
  useEffect(() => {
    handleCounter();
  }, [myData]); // abb ye sirf data state ki change pyy chalayga

  useEffect(() => {
    name();
  }, [countIs, myData]); // ye dono state ppp chalayga

  function handleCounter() {
    console.log("handleCounter called");
  }

  function name() {
    console.log("first");
  }

  return (
    <>
      <h1>Count is : {countIs}</h1>
      <h2>Data is : {myData}</h2>
    </>
  );
};

export default Counter;
