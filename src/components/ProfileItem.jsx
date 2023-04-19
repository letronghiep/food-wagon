import React from 'react'
import Button from './Button';
import { Edit } from '@mui/icons-material';

function ProfileItem({ title, children, onClick }) {
    return (
        <div className='p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-200 flex items-center justify-start'>
            <h3 className='flex-1'>{title}:</h3>
            <span className='ml-4 flex-[4]'>{children}</span>
            <Button className="ml-auto flex items-center hover:underline text-blue-600" children="Edit" LeftIcon={<Edit sx={{ fontSize: 18 }} className='' />} onClick={onClick} />
        </div>
    )
}

export default ProfileItem
