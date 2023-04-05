import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation';
import CategoriesPage from './routes/CategoriesPage';
import LoginForm from './auth/LoginForm'
import Home from './pages/Home';
import Booking from './routes/Booking';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='booking/*' element={<Booking />} />
        <Route path=':category' element={<CategoriesPage />} />
      </Route>


    </Routes>
  );
}

export default App;
