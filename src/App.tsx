import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<ProductDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/notification' element={<Notification />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App;
