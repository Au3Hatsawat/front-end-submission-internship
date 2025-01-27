import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import CartPage from './pages/cart'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </div>
  )
}

export default App
