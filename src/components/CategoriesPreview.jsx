import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../store/categories/selectCategories'
import CategoryPreview from './CategoryPreview';

function CategoriesPreview() {
<<<<<<< HEAD
    const categoriesMap = useSelector(selectCategoriesMap);
    return (
        <div>
            {
                Object.keys(categoriesMap).map((title, index) => {
                    const products = categoriesMap[title];

                    return <CategoryPreview products={products} title={title} key={index} />
                })
            }
=======
    const categories = useSelector(selectCategoriesMap)
    return (
        <div className='max-w-7xl mx-auto container my-[72px]'>
            {Object.keys(categories).map(title => {
                const products = categories[title];
                return <CategoryPreview key={title} products={products} title={title} />
            })}
>>>>>>> day4
        </div>
    )
}

export default CategoriesPreview
