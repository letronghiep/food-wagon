import { useSelector } from 'react-redux'
import { userSelector } from '../store/user/userSelector'
import { Avatar } from '@mui/material';
import Button from '../components/Button';
import { CameraAlt, ReceiptLong } from '@mui/icons-material';
const handlerSubmitForm = (e) => {
    e.preventDefault();
}
function Profile() {
    const currentUser = useSelector(userSelector);
    const { displayName, email } = currentUser;
    return (


        <div className='w-full'>
            <h2 className='font-bold uppercase text-2xl text-gray-600 pt-8 pb-5 w-full'>Chỉnh sửa thông tin</h2>
            <div className='py-8 rounded-lg shadow-md shadow-gray-300 flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <Avatar src="" sx={{ width: 76, height: 76 }}>{displayName[0]}</Avatar>

                    <input className='absolute d-none' type='file' id='file' name='file' />
                    <label htmlFor='file'>
                        <div className='flex items-center justify-center p-1 border border-gray-300 mt-4 cursor-pointer rounded-sm hover:bg-gray-300'>
                            <CameraAlt />
                            <p className='text-sm text-gray-600'>Chọn ảnh</p>
                        </div>

                    </label>
                </div>
                <form className='min-w-[500px] mt-8' onSubmit={handlerSubmitForm}>
                    <div className='flex items-center '>
                        <label htmlFor='displayName' className='flex-1 text-lg '>Ho va ten: </label>
                        <div className=' rounded-md border px-3 py-2 w-full flex-[3]'>
                            <input className='text-lg' type='text' value={displayName} />

                        </div>

                    </div>
                    <div className='flex items-center mt-5'>
                        <label htmlFor='email' className='flex-1 text-lg '>Email: </label>
                        <div className='rounded-md border px-3 py-2 w-full flex-[3]'>
                            <input className='text-lg' type='text' value={email} />

                        </div>

                    </div>
                    <button className='flex items-center justify-center p-1.5 w-[120px] bg-orange-500 mt-6 font-semibold text-lg uppercase text-white hover:bg-orange-600 rounded-md ml-auto'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Profile
