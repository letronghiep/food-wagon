import React from 'react'
import CardItem from './CardItem'
<<<<<<< HEAD

function CategoryPreview({ products, title }) {
    return (
        <div>
            <h1>{title}</h1>
            {products.filter((_, index) => index <= 4).map((product, index) => (
                <CardItem key={index} product={product} />
            ))}
=======
import { Link } from 'react-router-dom'

function CategoryPreview({ title, products }) {
    return (
        <div className='mt-10'>
            <Link to={title} className='font-bold text-3xl uppercase mt-10 cursor-pointer'>{title}</Link>
            <div className='grid grid-cols-4 gap-x-4 mt-6'>
                {products.filter((_, index) => index < 4).map((product, idx) => (
                    <CardItem key={idx} product={product} />
                ))}
            </div>
>>>>>>> day4
        </div>
    )
}

export default CategoryPreview
