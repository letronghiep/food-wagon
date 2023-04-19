import { Avatar } from '@mui/material'
import React from 'react'
import Button from './Button'
import { AccountCircle, ChevronRight, Logout } from '@mui/icons-material';
import { setCurrentUser } from '../store/user/userSlice';
import { signOutUser } from '../utils/firebase/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function UserDropDown({ currentUser }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signOut = () => {
        dispatch(setCurrentUser(null))
        signOutUser()
        navigate('/')
    }
    const { displayName, photoURL } = currentUser
    const goToProfile = () => {
        navigate(`account`)
    }
    return (
        <div className='w-[300px] bg-white p-2.5 rounded-lg  shadow-sm shadow-gray-400 border'>
            <div className='flex items-center border-b p-2 hover:bg-gray-200 rounded-lg cursor-pointer'>
                <Avatar src={photoURL}>{displayName && displayName[0]}</Avatar>
                <div className='ml-2'>{displayName}</div>
            </div>
            <div>
                <Button onClick={goToProfile} className="flex items-center justify-start p-3 hover:bg-gray-200 w-full" children="Tài khoản" LeftIcon={<AccountCircle />} RightIcon={<ChevronRight className='ml-auto' sx={{ fontSize: 32 }} />} />
                <Button className="flex items-center justify-start p-3 hover:bg-gray-200 w-full" children="Đăng xuất" LeftIcon={<Logout />} onClick={signOut} />
            </div>
        </div >
    )
}

export default UserDropDown
