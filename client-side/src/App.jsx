import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Categories from './pages/Categories';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;