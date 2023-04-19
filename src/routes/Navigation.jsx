import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import images from '~/assets/image'
import SearchInput from '../components/SearchInput'
import Button from '../components/Button'
import CartIcon from '../components/CartIcon'
import CartDropDown from '../components/CartDropDown'
import { useSelector } from 'react-redux'
import { userSelector } from '../store/user/userSelector'
import UserDropDown from '../components/UserDropDown';
import { AccountCircle, ListAlt } from '@mui/icons-material';
function Navigation() {
  const { logo, brand, location, searchIcon } = images;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenProfile = () => {
    setIsOpen(!isOpen);
  }


  const currentUser = useSelector(userSelector);
  return (
    <Fragment>
      <div id='nav-bar' className='shadow-md bg-white fixed top-0 left-0 right-0 z-10'>
        <div className='mx-auto container max-w-7xl py-2 flex items-center relative justify-between px-[70px]'>
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
            <Link to="booking" className="flex flex-col items-center py-1 text-amber-500 px-3 rounded-lg font-bold  ml-4 w-[100px]">
              <ListAlt />
              Booking
            </Link>
            {
              currentUser
                ? (
                  <Tippy
                    interactive
                    visible={isOpen}
                    offset={[0, 12]}
                    onClickOutside={handleOpenProfile}
                    render={attrs => (
                      <div tabIndex='-1' {...attrs}>
                        <UserDropDown currentUser={currentUser} />
                      </div>
                    )}
                  >
                    <div className='flex flex-col items-center justify-center text-orange-400 cursor-pointer' onClick={handleOpenProfile}>
                      <AccountCircle />
                      <p className='font-semibold uppercase'>{currentUser.displayName}</p>
                    </div>
                  </Tippy>
                )

                : <Link to='/auth' children="Login" className="flex flex-col w-[100px] items-center text-amber-500 px-3 py-1 rounded-lg font-bold  ">
                  <AccountCircle />
                  Login
                </Link>
            }

            <Tippy
              arrow
              interactive
              offset={[-250, -20]}
              placement='bottom-start'
              delay={[100, 500]}
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
