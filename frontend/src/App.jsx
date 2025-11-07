import { useState } from 'react'
import './App.css'
import Sidebar from './components/layout/Sidebar.jsx'
import LandingPage from './components/layout/LandingPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar />
    <LandingPage />
    </>
  )
}

export default App
