import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../store/categories/selectCategories'
import CategoryPreview from './CategoryPreview';

function CategoriesPreview() {
    const categoriesMap = useSelector(selectCategoriesMap);
    return (
        <div>
            {
                Object.keys(categoriesMap).map((title, index) => {
                    const products = categoriesMap[title];

                    return <CategoryPreview products={products} title={title} key={index} />
                })
            }
        </div>
    )
}

export default CategoriesPreview
