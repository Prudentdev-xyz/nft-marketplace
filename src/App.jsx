import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-black text-3xl pl-10 py-20'>Hello world</h1>
    </div>
  )
}

export default App
