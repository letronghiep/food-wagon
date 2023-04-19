import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../store/cart/cartSelector';
import CheckoutItem from '../components/CheckoutItem';
import { selectCartTotal } from '../store/cart/cartSelector';
import { clearCartItems } from '../store/cart/cartSlice'
function Order() {

    const [isActive, setIsActive] = useState(1);
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal)
    const handleActive = (id, name) => {
        setIsActive(id);
    }
    const handlePaypal = () => {
        dispatch(clearCartItems())
    }
    const listItems = [
        {
            id: 1,
            title: "Tất cả",
            box: <div>
                <div className=' p-2 shadow-sm max-h-[448px] overflow-y-scroll'>
                    {
                        cartItems.length > 0 ? cartItems.map(cartItem => <CheckoutItem className='flex items-center p-3 w-full cursor-pointer hover:bg-gray-100 min-h-[200px] overflow-hidden' cartItem={cartItem} />
                        ) : <span className='flex items-center justify-center text-3xl font-semibold py-28'>Your cart is empty</span>

                    }
                </div>
                <p className='my-4 mb-6 px-8 text-right text-2xl'>Total: {total}đ</p>
                <button onClick={handlePaypal} className='p-2 my-6 w-[120px] flex items-center justify-center bg-orange-500 text-white uppercase ml-auto mr-8 rounded-md hover:bg-orange-600'>Thanh Toan</button>
            </div>
        },
        {
            id: 2,
            title: "Đặt hàng thành công",
        },
        {
            id: 3,
            title: "Đang giao hàng",
        },
        {
            id: 4,
            title: "Đơn hàng hoàn tất",
        },
    ]
    const renderItems = (item) => (
        <li key={item.id} className={`py-1 px-3 w-full items-center justify-center flex rounded-sm text-gray-600 text-lg hover:bg-orange-500 hover:text-white cursor-pointer ${isActive === item.id ? "ordered" : ""}`} onClick={() => handleActive(item.id, item.title)}>
            {item.title}
        </li>
    )
    return (
        <>
            <div className='w-full'>
                <h2 className='font-bold uppercase text-2xl text-gray-600 pt-8 pb-5 w-full'>Đơn hàng của tôi</h2>
                <div className='border'>
                    <ul className='flex items-center shadow-sm p-1 shadow-gray-400 rounded-sm justify-between'>
                        {listItems.map(item => renderItems(item))}
                    </ul>
                    {
                        listItems.map(item => (
                            <>
                                {isActive === item.id && item.box}
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Order
