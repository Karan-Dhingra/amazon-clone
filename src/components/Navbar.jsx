import React from 'react'
import Logo from '../img/logo.png'
import Location from '../img/location.png'
import Cart from '../img/cart.png'
// import Profile from '../img/profile.png'
import Search from '../img/search.png'
import { ArrowDropDownRounded, Menu } from '@mui/icons-material'

export const Navbar = () => {
    return (
        <nav className='bg-Primary text-white'>
            <div className='top flex items-center bg-NavBackground h-16 px-4 justify-between'>
                <div className='logo cursor-pointer'>
                    <img src={Logo} alt='logo' className='w-24' />
                </div>
                <div className='address flex items-end cursor-pointer'>
                    <div className='left'>
                        <img src={Location} alt='location' className='h-5' />
                    </div>
                    <div className='right flex flex-col'>
                        <span className='text-xs leading-3'>Hello</span>
                        <span className='font-semibold leading-4'>
                            Select your address
                        </span>
                    </div>
                </div>
                <div className='searchBox flex w-7/12 cursor-pointer'>
                    <div className='selectCat h-10 w-14 flex items-center justify-center bg-slate-200 text-black rounded-l-md'>
                        <span className='text-xs'>All</span>
                        <ArrowDropDownRounded />
                    </div>
                    <div className='inputBox w-full'>
                        <input type='text' className='w-full h-10' />
                    </div>
                    <div className='searchBox w-12 h-10 bg-SearchBackground flex items-center justify-center rounded-r-md'>
                        <img src={Search} alt='search' className='w-6' />
                    </div>
                </div>
                <div className='signIn flex flex-col justify-center cursor-pointer'>
                    <div className='top leading-3'>
                        <span className='text-xs leading-3'>
                            Hello, sign in
                        </span>
                    </div>
                    <div className='bottom flex items-center h-min leading-4'>
                        <span className='font-semibold leading-4'>
                            Accounts & list
                        </span>
                        <div className='icon'>
                            <ArrowDropDownRounded />
                        </div>
                    </div>
                </div>
                <div className='returnOrder flex flex-col cursor-pointer'>
                    <span className='text-xs leading-3'>Returns</span>
                    <span className='font-semibold leading-4'>& Orders</span>
                </div>
                <div className='cart flex items-end cursor-pointer'>
                    <div className='left relative'>
                        <img src={Cart} alt='Cart' className='w-12' />
                        <span className='absolute -top-1 left-2/4 font-bold text-CartColor text-lg leading-3'>
                            0
                        </span>
                    </div>
                    <div className='right'>
                        <span className='font-bold'>Cart</span>
                    </div>
                </div>
            </div>
            <div className='bottom h-10 flex items-center px-4 gap-x-3'>
                <div className='text flex items-center'>
                    <div className='expandMenu icon mr-1 cursor-pointer'>
                        <Menu />
                    </div>
                    <span className='font-semibold cursor-pointer'>All</span>
                </div>
                <div className='text cursor-pointer'>Best Sellers</div>
                <div className='text cursor-pointer'>Mobiles</div>
                <div className='text cursor-pointer'>Electronics</div>
                <div className='text cursor-pointer'>Today's Deals</div>
                <div className='text cursor-pointer'>Fashion</div>
                <div className='text cursor-pointer'>Computers</div>
            </div>
        </nav>
    )
}
