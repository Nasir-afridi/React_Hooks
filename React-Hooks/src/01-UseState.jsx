import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);

    function increment () {
        setCount(count + 1)
    }
    function decrement () {
        setCount(count - 1)
    }
  return (
    <>
    <h1>You Click {count} Times </h1>
    <button onClick={increment}>Increment</button>
    <br />
    <br />
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default UseState