import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectCategoriesMap } from "../store/categories/selectCategories"
import CardItem from "../components/CardItem"

function CategoriesPage() {
    const { category } = useParams()
    const categories = useSelector(selectCategoriesMap)

    const [foods, setFoods] = useState(categories[category])

    useEffect(() => {
        setFoods(categories[category])
    }, [category, categories])
    console.log(foods)
    const [filterFoods, setFilterFoods] = useState(foods)
    const [filterText, setFilterText] = useState("")
    const handleFilterText = (e) => {
        setFilterText(e.target.value)
        console.log("Filter==>", e.target.value)
    }
    useEffect(() => {
        if (foods && foods.length > 0) {
            switch (filterText) {
                case "sortUp":
                    return setFilterFoods(
                        [...foods].sort((a, b) => a.price - b.price)
                    )
                case "sortDown":
                    return setFilterFoods(
                        [...foods].sort((a, b) => b.price - a.price)
                    )
                default:
                    return setFilterFoods(foods)
            }
        }
    }, [filterText, foods])
    return (
        <section id="food-pages" className="mt-[72px]">
            <div className="container max-w-7xl mx-auto px-[70px]">
                <h1 className="font-bold text-4xl text-center">
                    {category.toLocaleUpperCase()}
                </h1>
                <div className="text-end">
                    <label>Sắp xếp theo giá: </label>
                    <select
                        value={filterText}
                        onChange={(e) => handleFilterText(e)}
                    >
                        <option value="sortUp">Thấp đến cao</option>
                        <option value="sortDown">Cao đến thấp</option>
                    </select>
                </div>
                <div className="grid grid-cols-4 gap-x-4">
                    {filterFoods &&
                        filterFoods.map((food) => <CardItem product={food} />)}
                </div>
            </div>
        </section>
    )
}

export default CategoriesPage
