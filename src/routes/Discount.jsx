import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import DiscountPreviews from '../components/DiscountPreviews'

import foods from '../foods'
import { useDispatch } from 'react-redux'
import { setCategories } from '../store/categories/categoriesSlice'

function Discount() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCategories(foods))
    })
    return (
        <div className="mt-[72px]">
            <Routes>
                {/* <Route index element={<CategoriesPreview />} /> */}
                <Route path='/:discount' element={<DiscountPreviews />} />
            </Routes>

        </div>
    )
}

export default Discount
