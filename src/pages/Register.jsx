import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import {register} from '../redux/actions/userAction'

export const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const userRegister = useSelector((state) => state.userRegister)
    const dispatch = useDispatch()
    const {error, loading} = userRegister

    const handleClick = (e) => {
        e.preventDefault()
        if(password === confirmpassword){
            dispatch(register(name, mobileNumber, email, password, confirmpassword))
        }else{
            console.log('PASSWORD DOESNT MATCH');
        }
        console.log(error)
    }

    return (
        <div className='outerContainer bg-white h-full py-20'>
            <div className='body w-80 mx-auto'>
                <div className='top flex items-center justify-center my-2 mb-4'>
                    <img src={Logo} alt='logo' className='w-28 invert' />
                </div>
                <form
                    onSubmit={(e) => handleClick(e)}
                    className='center flex flex-col p-5 border-2 border-[#ddd] rounded-md'
                >
                    <div className='heading mb-1'>
                        <h3 className='font-semibold text-2xl'>
                            Create Account
                        </h3>
                    </div>
                    <div className='form flex flex-col gap-y-2 mt-2'>
                        <div className='name-input flex flex-col'>
                            <span className='font-bold text-xs'>Your name</span>
                            <input
                                type='text'
                                required
                                className='w-full border-2 border-[#a6a6a6] rounded-md p-1'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='number-input flex flex-col'>
                            <span className='font-bold text-xs'>
                                Mobile Number
                            </span>
                            <input
                                type='number'
                                required
                                className='w-full border-2 border-[#a6a6a6] rounded-md p-1'
                                onChange={(e) =>
                                    setMobileNumber(e.target.value)
                                }
                            />
                        </div>
                        <div className='email-input flex flex-col'>
                            <span className='font-bold text-xs'>Email</span>
                            <input
                                type='email'
                                required
                                className='w-full border-2 border-[#a6a6a6] rounded-md p-1'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='password-input flex flex-col'>
                            <span className='font-bold text-xs'>Password</span>
                            <input
                                type='password'
                                required
                                className='w-full border-2 border-[#a6a6a6] rounded-md p-1'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='password-input flex flex-col'>
                            <span className='font-bold text-xs'>
                                Confirm Password
                            </span>
                            <input
                                type='password'
                                required
                                className='w-full border-2 border-[#a6a6a6] rounded-md p-1'
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </div>
                        <p className='text-xs leading-4'>
                            We will send you a text to verify your phone.
                            Message and Data rates may apply.
                        </p>
                        <div className='submit'>
                            <button
                                type='submit'
                                className='bg-ButtonColor p-2 py-[7px] border-2 border-[#8d8d8d] rounded-md text-sm w-full'
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                    <div className='bottomText my-3'>
                        <div className='text flex items-end py-[1px]'>
                            <p className='text-xs leading-4'>
                                Already have a account?
                            </p>
                            <Link
                                to='/login'
                                className='text-xs leading-4 text-blue-700 font-semibold'
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
