import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    function counter () {
        setCount(count + 1)
    }
  return (
    <>
    <h1>You Click {count} Times </h1>
    <button onClick={counter}>Increment</button>
    </>
  )
}

export default UseState