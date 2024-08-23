import { useState } from 'react'
import HomePage from './pages/HomePage'
import SearchAppBar from './components/ResponsiveAppBar'
import { Container } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SearchAppBar/>
        <div style={{marginTop: "20px"}}>
           <HomePage/>
        </div>
       
    </>
  )
}

export default App
