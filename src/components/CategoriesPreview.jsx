import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../store/categories/selectCategories'
import CategoryPreview from './CategoryPreview';

function CategoriesPreview() {
    const categories = useSelector(selectCategoriesMap)
    return (
        <div className='max-w-7xl mx-auto container my-[72px] px-[70px]'>
            {Object.keys(categories).map(title => {
                const products = categories[title];
                return <CategoryPreview key={title} products={products} title={title} />
            })}
        </div>
    )
}

export default CategoriesPreview
