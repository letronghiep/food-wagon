import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation';
import LoginForm from './auth/LoginForm'
import Home from './pages/Home';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<LoginForm />} />

      </Route>


    </Routes>
  );
}

export default App;
