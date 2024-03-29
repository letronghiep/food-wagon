import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { setCategories } from '../store/categories/categoriesSlice'

import CategoriesPreview from '~/components/CategoriesPreview'
import CategoriesPage from '../routes/CategoriesPage'



import foods from '../foods'
function Booking() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCategories(foods));
  })
  return (
    <div className="mt-[72px]">
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path='/:category' element={<CategoriesPage />} />
      </Routes>

    </div>
  )
}

export default Booking
