import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/Header.jsx'
import Panel from "./components/Panel.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Panel />
  </StrictMode>,
)
