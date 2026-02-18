// import UseState from "./Hooks/01-UseState";
// import UseEffect from "./Hooks/02-UseEffect";
import { useState } from "react";
import Counter from "./Props/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  return (
    <>
      {/* <UseState /> */}
      {/* <UseEffect /> */}

      <Counter countIs={count} myData={data} />
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </>
  );
}

export default App;
