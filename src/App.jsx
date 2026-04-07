
import './App.css'
import NavBar from './componnents/NavBar'
import Footer from './componnents/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <NavBar />
<Routes>
  <Route path='/' element={<Home />}>

  </Route>
</Routes>
      <Footer />
     
    </>
  )
}

export default App
