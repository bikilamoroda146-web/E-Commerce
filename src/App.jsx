
import './App.css'
import NavBar from './componnents/NavBar'
import Footer from './componnents/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <NavBar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/cart' element={<Cart />}/>
</Routes>
      <Footer />
     
    </>
  )
}

export default App
