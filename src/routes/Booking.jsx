import React, { useEffect } from 'react'
<<<<<<< HEAD
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

=======
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesPage from './CategoriesPage'
import { setCategories } from '../store/categories/categoriesSlice'
import foods from '../foods'
import CategoriesPreview from '../components/CategoriesPreview'
function Booking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategories(foods))
  }, [])
>>>>>>> day4
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path='/:category' element={<CategoriesPage />} />
    </Routes>
  )
}

export default Booking
