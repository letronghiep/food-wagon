import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import MailLockOutlinedIcon from '@mui/icons-material/MailLockOutlined';
function ResetPassword() {
    const navigate = useNavigate();
    const [isConfirm, setIsConfirm] = useState(false);
    const [confirmUserName, setConfirmUserName] = useState('');
    const navigateBack = () => {
        navigate(-1)
    }
    const navigateHome = () => {
        navigate('/')
    }
    const confirmReset = (e) => {
        e.preventDefault()
        setIsConfirm(true)
    }
    const handlerUserName = e => setConfirmUserName(e.target.value)
    return (
        <>
            <div className="bg-slate-50 rounded-2xl px-12 py-12 shadow-md">
                <div className='flex items-center justify-start'>
                    <ArrowBack onClick={navigateBack} className='text-orange-500 cursor-pointer' sx={{ fontSize: 40 }} />
                    <h2 className="uppercase my-5 text-3xl font-bold text-orange-600 mx-auto">
                        Reset Password
                    </h2>
                </div>
                {!isConfirm && <form className="">
                    <div className="flex flex-col w-[400px]">
                        <FormInput type='text' placeholder="Username" label="Username" onChange={handlerUserName} value={confirmUserName} />
                    </div>
                    <Button onClick={confirmReset}
                        className="bg-orange-500 my-7 text-white font-bold text-xl p-2 w-full uppercase rounded-lg hover:opacity-90 outline-none border-none"
                    >
                        Continue
                    </Button>
                </form>}
                {
                    isConfirm &&
                    <div className="flex flex-col w-[400px] items-center">
                        <MailLockOutlinedIcon sx={{ fontSize: 80 }} />
                        <div className='text-lg text-center mt-4'>
                            <p>Mã xác minh đã được gửi đến địa chỉ </p>
                            <p className='text-orange-600'>{confirmUserName}</p>
                            <p>Vui lòng xác minh</p>

                        </div>
                        <button onClick={navigateHome} className='w-full py-2 text-xl font-bold text-white text-center bg-orange-500 rounded-lg mt-4'>OK</button>
                    </div>
                }
            </div>



        </>
    )
}

export default ResetPassword
