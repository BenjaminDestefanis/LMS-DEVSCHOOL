import { useState } from 'react'
import './App.css'
import Sidebar from './components/layout/Sidebar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar />
    </>
  )
}

export default App
