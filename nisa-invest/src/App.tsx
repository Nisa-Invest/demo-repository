import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
      <h1>Vite + React</h1>
      <div className=" bg-primary-purple card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="text-accent-light-green">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
