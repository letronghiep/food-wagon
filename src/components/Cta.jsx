import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { ChevronRight } from '@mui/icons-material'

function Cta() {
    const navigate = useNavigate()
    const onNavigateHandler = () => {
        navigate('/booking')
    }
    return (
        <div id='cta' className='mt-20 py-12' style={{
            backgroundImage: 'url(https://i.ibb.co/0YgxB8K/Image-1.png)',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover'
        }}>
            <div className='container max-w-7xl mx-auto mt-10 flex flex-col'>
                <h1 className='max-w-lg text-center text-white text-5xl font-bold mx-auto flex justify-center items-center'>Are you ready to order with the best deals?</h1>
                <Button onClick={onNavigateHandler} children="Proceed to order" RightIcon={ChevronRight} className="bg-orange-500 py-3 px-7 font-bold text-white text-base flex items-center justify-between mx-auto uppercase mt-9 hover:bg-orange-400 rounded-md" />
            </div>
        </div>
    )
}

export default Cta
