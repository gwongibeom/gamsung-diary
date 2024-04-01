import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/diary' element={<Diary />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
