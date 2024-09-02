import { useState } from 'react'
import HomePage from './pages/HomePage'
import SearchAppBar from './components/ResponsiveAppBar'
import { BrowserRouter, createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import { Container, Hidden } from '@mui/material'
import EventsPage from './pages/EventsPage'

const router = createHashRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/events",
        element: <EventsPage/>
      },
    ]
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SearchAppBar/>
        <div style={{marginTop: "20px"}}>
           <RouterProvider router={router}/>
        </div>
       
    </>
  )
}

export default App
