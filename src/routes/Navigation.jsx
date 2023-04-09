import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'

import images from '~/assets/image'
import SearchInput from '../components/SearchInput'
import Button from '../components/Button'
import CartIcon from '../components/CartIcon'
import CartDropDown from '../components/CartDropDown'
function Navigation() {
  const { logo, brand, location, searchIcon, userLogin } = images
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  return (
    <Fragment>
      <div id='nav-bar' className='shadow-md bg-white fixed top-0 left-0 right-0 z-10'>
        <div className='mx-auto container max-w-7xl py-4 flex items-center relative justify-between px-[70px]'>
          <Link to='/' className='flex w-[200px] h-auto'>
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
            <SearchInput src={searchIcon} placeholder="Search Food" bgInput='focus:outline-orange-400' />
            <Link to="booking" children="Booking" className="flex items-center text-amber-500 px-3 py-2 rounded-lg font-bold shadow-md shadow-orange-300 hover:bg-orange-200 hover:text-white ml-4 " />
            <Button onClick={goToLogin} images={userLogin} children="Login" className="flex items-center text-amber-500 px-3 py-2 rounded-lg font-bold shadow-md shadow-orange-300 hover:bg-orange-200 hover:text-white ml-4 " />
            <Tippy
              arrow
              visible
              interactive
              offset={[-250, -20]}
              placement='bottom-start'
              delay={[100, 700]}
              render={attrs => (
                <div tabIndex="-1" {...attrs}>
                  <CartDropDown />
                </div>
              )}
            >
              <div>
                <CartIcon />

              </div>
            </Tippy>
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </Fragment>
  )
}

export default Navigation
