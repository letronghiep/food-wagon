import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Booking from './routes/Booking';
import Checkout from './routes/Checkout';
import MainLayout from './routes/MainLayout';
import Auth from './routes/Auth';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/booking/*' element={<Booking />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>

    </Routes>
  );
}

export default App;
