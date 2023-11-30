import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ContextWordle } from './context/contextWordle.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextWordle>
      <App />
    </ContextWordle>
  </React.StrictMode>,
)
