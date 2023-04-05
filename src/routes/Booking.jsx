import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '~/components/CategoriesPreview'
import CategoriesPage from './CategoriesPage'

function Booking() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' component={<CategoriesPage />} />
    </Routes>
  )
}

export default Booking
