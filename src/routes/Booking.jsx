import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { setCategories } from '../store/categories/categoriesSlice'

import CategoriesPreview from '~/components/CategoriesPreview'
import CategoriesPage from './CategoriesPage'



import foods from '../foods'
function Booking() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCategories(foods));
  })

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' component={<CategoriesPage />} />
    </Routes>
  )
}

export default Booking
