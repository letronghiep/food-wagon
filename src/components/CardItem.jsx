import React from "react"
import { addItemToCart } from "../store/cart/cartSlice"
import { useDispatch } from "react-redux"
import Button from "./Button"
function CardItem({ product }) {
    // const cartItems = useSelector(selectCartItems)
    const { name, price, discount, imageUrl } = product
    const dispatch = useDispatch()
    const addFoodToCart = () => dispatch(addItemToCart(product))
    return (
        <div className="relative flex flex-col justify-between  cursor-pointer bg-gray-200 mt-6 rounded-t-2xl rounded-b-lg overflow-hidden">
            <img
                src={imageUrl}
                alt={name}
                className="rounded-2xl w-full object-cover h-[208px]"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-orange-500 uppercase max-w-[208px] truncate mt-3 px-3">
                    {name}
                </h2>
                <span className="flex items-center justify-start p-3 text-lg">
                    {discount && (
                        <p className="mr-4 text-orange-500 font-bold">
                            {(
                                price -
                                (discount * price) / 100
                            ).toLocaleString("vi-VN")}
                            đ
                        </p>
                    )}
                    {discount ? (
                        <del className="text-slate-400">
                            {price.toLocaleString("vi-VN")}đ
                        </del>
                    ) : (
                        <p>{price.toLocaleString("vi-VN")}đ</p>
                    )}
                </span>
                {discount && (
                    <p className=" text-white absolute left-0 bottom-[190px] px-7 translate-y-[19px] rounded-bl-2xl rounded-tr-2xl bg-[#ffb30e] py-5  flex items-center">
                        <span className="font-bold text-6xl">{discount}</span>
                        <span className="leading-none text-xl flex flex-col">
                            <span className="font-bold">%</span>
                            <span>Off</span>
                        </span>
                    </p>
                )}
                <Button
                    onClick={addFoodToCart}
                    children="Order now"
                    className="w-full font-semibold bg-orange-600 hover:bg-orange-500 text-white uppercase p-3 rounded-lg"
                />
            </div>
        </div>
    )
}

export default CardItem
