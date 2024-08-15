import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(1)

  const [time, setTime] = useState(10)
  const [result, setResult] = useState(0)


  return (
    <>
      <h1>Calculator</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count * time + 1)}>
          1
        </button>
        <button onClick={() => setCount((count) => count * time + 2)}>
          2
        </button>
        <button onClick={() => setCount((count) => count * time + 3)}>
          3
        </button>
        <br></br>
        <button onClick={() => setCount((count) => count * time + 4)}>
          4
        </button>
        <button onClick={() => setCount((count) => count * time + 5)}>
          5
        </button>
        <button onClick={() => setCount((count) => count * time + 6)}>
          6
        </button>
        <br></br>
        <button onClick={() => setCount((count) => count * time + 7)}>
          7
        </button>
        <button onClick={() => setCount((count) => count * time + 8)}>
          8
        </button>
        <button onClick={() => setCount((count) => count * time + 9)}>
          9
        </button>
        <br></br>
        <button onClick={() => setCount((count) => count * time + 0)}>
          0
        </button>
        <button onClick={() => {
          setNum1(count);
          setNum2(count);
          setCount(0);
        }}>
          +
        </button>
        <button onClick={() => {
          setNum1(count);

          setCount(0);
        }}>
          -
        </button>
        <br></br>
        <button onClick={() => {
          setNum1(count);

          setCount(0);
        }}>
          *
        </button>
        <button onClick={() => {
          setNum1(count);

          setCount(0);
        }}>
          /
        </button>
        <button onClick={() => setResult(num1 + num2)}>
          =
        </button>
        <p>
          {count}
        </p>
        <p>
          {num1}
        </p>
        <h2>Result: {result}</h2>
      </div >
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
