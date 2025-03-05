import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContest from './context/UserContest.jsx'

createRoot(document.getElementById('root')).render(
  <UserContest>
    <App />
  </UserContest>,
  )
