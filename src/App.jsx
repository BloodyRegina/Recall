import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from './Pages/Test'
import NotFound from './Pages/NotFound'
import Content from './Pages/Content'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Test/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/Content' element={<Content/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
