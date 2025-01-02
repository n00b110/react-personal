import { Route, Routes } from 'react-router-dom'
import Projects from './components/About'
import Home from './components/Home'
import About from './components/About'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects' element={<About />} />
    </Routes>
  )
}


