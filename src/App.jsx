import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './layouts/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1 className='text-white text-3xl font-bold'>Hello world</h1> */}
      <Header />
    </div>
  )
}

export default App
