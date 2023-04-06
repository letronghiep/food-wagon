import React, { Fragment } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import images from '~/assets/image'
import SearchInput from '../components/SearchInput'
import Button from '../components/Button'
import CartIcon from '../components/CartIcon'
function Navigation() {
  const { logo, brand, location, searchIcon, userLogin } = images
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  return (
    <Fragment>
      <div id='nav-bar' className='shadow-md bg-white'>
        <div className='mx-auto container max-w-7xl py-4 flex items-center justify-between'>
          <Link to='/' className='flex w-44 h-auto'>
            <img src={logo} alt="" />
            <img src={brand} alt='' className='ml-2' />
          </Link>
          <div className='flex items-center justify-between drop-shadow-sm shadow'>
            <h6 className='font-bold mr-2'>Deliver to: </h6>
            <img src={location} alt='' />
            <span className='mx-2'>Current Location: </span>
            <span className='font-bold'>HaNoi, VietNam</span>
          </div>
          <div className='flex items-center justify-between'>
            <SearchInput icon={searchIcon} placeholder="Search Food" />
            <Button onClick={goToLogin} images={userLogin} children="Login" className="flex items-center text-amber-500 px-3 py-2 rounded-lg font-bold shadow-md shadow-orange-300 hover:bg-orange-200 hover:text-white ml-4 " />
            <CartIcon />
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
