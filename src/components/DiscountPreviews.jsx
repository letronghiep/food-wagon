import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCategoryWithDiscount } from '../store/categories/selectCategories';
import { useParams } from 'react-router-dom';
import CardItem from './CardItem';

function DiscountPreviews() {
    const { discount } = useParams();
    const categories = useSelector(selectCategoryWithDiscount);
    const categoriesDiscount = categories[discount]

    const [foodDiscount, setFoodDiscount] = useState(categoriesDiscount)
    useEffect(() => {
        setFoodDiscount(categoriesDiscount)
    }, [discount, categoriesDiscount])

    return (
        <div className='max-w-7xl  mx-auto px-[70px]'>
            <h1 className='text-4xl text-center font-bold uppercase pt-10 '>Top Discount {discount}%</h1>
            <div className='grid grid-cols-4 gap-x-4 mt-6 mb-14'>
                {
                    foodDiscount && foodDiscount.products.map(product => <CardItem key={product.id} product={product} />)
                }

            </div>
        </div>
    )
}

export default DiscountPreviews
