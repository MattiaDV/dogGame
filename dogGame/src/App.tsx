import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Game } from './assets/Game'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  )
}

export default App
