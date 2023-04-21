import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductDetails from './pages/ProductDetails';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<ProductDetails />} />

      <Route element={<PrivateRoute />}>
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/profile' element={<Profile />} />
      </Route>

      <Route path='/auth' element={<Auth />}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App;
