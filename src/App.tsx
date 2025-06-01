
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductComparisonPage from './pages/Comparison-page'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetail'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/products  " element={<ProductComparisonPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />

    </Routes>
  )
}

export default App
