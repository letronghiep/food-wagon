import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { createUserDocumentFromAuth, onAuthStateChange } from './utils/firebase/firebase';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Checkout from './routes/Checkout';
import MainLayout from './routes/MainLayout';
import Auth from './pages/Auth';
import Discount from './routes/Discount';
import Profile from './routes/Profile';
import { setCurrentUser } from './store/user/userSlice';
import Account from './pages/Account';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {

    const unsubscribe = onAuthStateChange(async (user) => {
      if (user) {
        const userData = await createUserDocumentFromAuth(user)
        dispatch(setCurrentUser(userData));
      }
    })
    return unsubscribe
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/booking/*' element={<Booking />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/discount/*' element={<Discount />} />
        <Route path='/account/*' element={<Account />} />
      </Route>

    </Routes>
  );
}

export default App;
