import React from 'react'
import CardItem from './CardItem'

function CategoryPreview({ products, title }) {
    return (
        <div>
            <h1>{title}</h1>
            {products.filter((_, index) => index <= 4).map((product, index) => (
                <CardItem key={index} product={product} />
            ))}
        </div>
    )
}

export default CategoryPreview
