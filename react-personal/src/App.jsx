import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<About />} />
      <Route path='/' element={<Contact />} />
    </Routes>
  )
}


