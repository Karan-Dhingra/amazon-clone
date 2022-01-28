import React, { useEffect, useState } from 'react'
import Logo from '../img/logo.png'
import Location from '../img/location.png'
import Cart from '../img/cart.png'
// import Profile from '../img/profile.png'
import Search from '../img/search.png'
import { ArrowDropDownRounded, Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/userAction'

export const Navbar = ({ login }) => {
    const [qty, setQty] = useState(0)
    const cartData = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const logoutMe = (e) => {
        dispatch(logout())
        e.preventDefault()
    }

    useEffect(() => {
        let quantity = cartData ? cartData.quantity : 0
        setQty(quantity)
        // const getData = () => {
        // }
        // return () => {
        //     getData()
        // };
    }, [cartData])
    return (
        <nav className='bg-Primary text-white'>
            <div className='top flex items-center bg-NavBackground h-16 px-4 justify-between'>
                <Link to='/' className='logo cursor-pointer'>
                    <img src={Logo} alt='logo' className='w-24' />
                </Link>
                <div className='address flex items-end cursor-pointer'>
                    <div className='left'>
                        <img src={Location} alt='location' className='h-5' />
                    </div>
                    <div className='right flex flex-col'>
                        <span className='text-xs leading-3'>Hello</span>
                        <span className='font-semibold leading-4'>
                            {login ? `India` : `Select your address`}
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
                {!login ? (
                    <Link
                        to='/login'
                        className='signIn flex flex-col justify-center cursor-pointer'
                    >
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
                    </Link>
                ) : (
                    <div
                        className='bottom flex items-center h-min font-semibold leading-4 cursor-pointer'
                        onClick={(e) => logoutMe(e)}
                    >
                        Logout
                    </div>
                )}
                <Link to='/cart' className='cart flex items-end cursor-pointer'>
                    <div className='left relative'>
                        <img src={Cart} alt='Cart' className='w-12' />
                        <span className='absolute -top-[3px] left-[43%] font-bold text-CartColor text-lg leading-3'>
                            {qty ? qty : 0}
                        </span>
                    </div>
                    <div className='right'>
                        <span className='font-bold'>Cart</span>
                    </div>
                </Link>
            </div>
            <div className='bottom h-10 flex items-center px-4 gap-x-7'>
                <div className='text flex items-center'>
                    <div className='expandMenu icon mr-1 cursor-pointer'>
                        <Menu />
                    </div>
                    <span className='font-semibold cursor-pointer'>All</span>
                </div>
                <Link
                    to='/category/men-fashion'
                    className='text cursor-pointer hover:underline transition-all underline-offset-2 delay-200'
                >
                    Men's Fashion
                </Link>
                <Link
                    to='/category/women-fashion'
                    className='text cursor-pointer hover:underline transition-all underline-offset-2 delay-200'
                >
                    Women's Fashion
                </Link>
                <Link
                    to='/category/electronics'
                    className='text cursor-pointer hover:underline transition-all underline-offset-2 delay-200'
                >
                    Electronics
                </Link>
                <Link
                    to='/category/jewelery'
                    className='text cursor-pointer hover:underline transition-all underline-offset-2 delay-200'
                >
                    Fashion
                </Link>
            </div>
        </nav>
    )
}
