import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectCategoriesMap } from '../store/categories/selectCategories';
import CardItem from '../components/CardItem';

function CategoriesPage() {
    const { category } = useParams();
    const categories = useSelector(selectCategoriesMap);
    const [foods, setFoods] = useState(categories[category])
    useEffect(() => {
        setFoods(categories[category])
    }, [category, categories])
    return (
        <section id="food-pages" className='mt-[72px]'>
            <div className='container max-w-7xl mx-auto px-[70px]'>
                <h1 className='font-bold text-4xl text-center'>{category.toLocaleUpperCase()}</h1>
                <div className='grid grid-cols-4 gap-x-4'>
                    {
                        foods && foods.map(food => (
                            <CardItem product={food} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CategoriesPage
