import React from 'react'
import { useParams } from 'react-router-dom'

function CategoriesPage() {
    const { category } = useParams();
    console.log(category);
    return (
        <div>

        </div>
    )
}

export default CategoriesPage
