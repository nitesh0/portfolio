import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StarsCanvas from './components/StarBackground.tsx'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StarsCanvas/>
      <App />
   

  </StrictMode>,
)
