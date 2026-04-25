import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Ciao mondo</h1>} />
      <Route path="/test" element={<h1>Ciao test</h1>} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  )
}

export default App
