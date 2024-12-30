import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}


