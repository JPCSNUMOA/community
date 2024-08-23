import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import './css/HomePage.css'

const maintheme = createTheme({
 palette: {
    mode: 'light',
    primary: {
      main: '#1a2056',
    },
    secondary: {
      main: '#1651aa',
    },
    info: {
      main: '#35fff6',
    },
    background: {
      default: '#fffcf9',
      
    },
  },
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={maintheme}>
        <CssBaseline/>
        <App/>
    </ThemeProvider>
     
  </StrictMode>,
)
