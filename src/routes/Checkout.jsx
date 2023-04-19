import { useDispatch } from 'react-redux'
import CheckoutItem from '../components/CheckoutItem'
import { selectCartItems, selectCartTotal } from '../store/cart/cartSelector'
import { useSelector } from 'react-redux'
import { clearCartItems } from '../store/cart/cartSlice'

function Checkout() {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectCartTotal)
    const handlePaypal = () => {
        dispatch(clearCartItems())
    }


    return (
        <div id='checkout' className='mt-[72px] container max-w-7xl mx-auto px-[70px] pt-10 min-h-[90vh]'>
            <div className='flex  flex-col'>
                <div className='w-full m-3 pb-3 flex justify-between border-b-2'>
                    <div className='capitalize w-[23%]'>
                        <span className='text-xl'>Product</span>
                    </div>
                    <div className='capitalize w-[23%]'>
                        <span className='text-xl'>Description</span>
                    </div>
                    <div className='capitalize w-[23%]'>
                        <span className='text-xl'>Quantity</span>
                    </div>
                    <div className='capitalize w-[23%]'>
                        <span className='text-xl'>Price</span>
                    </div>
                    <div className='capitalize w-[8%]'>
                        <span className='text-xl'>Remove</span>
                    </div>
                </div>
                {
                    cartItems.length > 0 ? cartItems.map(cartItem => (
                        <CheckoutItem className='flex items-center p-3 w-full min-h-[100px] border-b' key={cartItem.id} cartItem={cartItem} />

                    )) : <span className='mx-auto mt-52 text-3xl uppercase'>Checkout is empty</span>
                }

                <span className='ml-auto text-3xl mt-12'>Total: {total}đ</span>
                <button onClick={handlePaypal} className='p-2 my-6 w-[120px] flex items-center justify-center bg-orange-500 text-white uppercase ml-auto rounded-md hover:bg-orange-600'>Thanh Toan</button>
            </div>
        </div>
    )
}

export default Checkout
