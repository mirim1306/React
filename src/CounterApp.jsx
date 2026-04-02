import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function CounterApp() {
  // count: 상태 값, 이전 상태 값; setCount(): 상태를 바꾸는 함수. 반드시 얘로 바꿔야함
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount((count)=>count+1)}>+</button>
      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}
    </>
  )
}

export default CounterApp
