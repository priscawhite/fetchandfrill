import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import Shop from './pages/Shop'
import { Cart } from './pages/Cart'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])

  return (
    <Router>
      <Routes>
        <Route element={<Layout cart={cart} />}>
          <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
          <Route path="/Shop" element={<Shop cart={cart} setCart={setCart}/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
