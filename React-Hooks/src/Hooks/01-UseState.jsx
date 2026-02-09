import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    function increment () {
        setCount(count + 1)
    }
    function decrement () {
        setCount(count - 1)
    }
    function reset() {
      setCount(0)
    }
  return (
    <>
    <h1>You Click {count} Times </h1>
    <button onClick={increment}>+1</button>
    <br />
    <br />
    <button onClick={decrement}>-1</button>
    <br />
    <br />
    <button onClick={reset}>Reset</button>
    <h1>You Typed : {text}</h1>
    <input value={text} type="text" onChange={(e) => setText(e.target.value)}/>
    </>
  )
}

export default UseState;