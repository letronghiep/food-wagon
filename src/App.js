import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginForm from './auth/LoginForm'
import Home from './pages/Home';
import Booking from './routes/Booking';
import CheckOut from './routes/CheckOut';
import MainLayout from './routes/MainLayout';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/booking/*' element={<Booking />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Route>

    </Routes>
  );
}

export default App;
