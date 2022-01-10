import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

export const Login = () => {
    return (
        <div className='outerContainer bg-white h-full py-20'>
            <div className='body w-80 mx-auto'>
                <div className='top flex items-center justify-center my-2 mb-4'>
                    <img src={Logo} alt='logo' className='w-28 invert' />
                </div>
                <div className='center flex flex-col p-5 border-2 border-[#ddd] rounded-md'>
                    <div className='heading mb-1'>
                        <h3 className='font-semibold text-2xl'>Sign-In</h3>
                    </div>
                    <div className='form flex flex-col gap-y-2 mt-2'>
                        <div className='email-input flex flex-col'>
                            <span className='font-bold text-xs'>Email</span>
                            <input
                                type='text'
                                className='w-full border-2 border-[#a6a6a6] rounded-md p-1'
                            />
                        </div>
                        <div className='password-input flex flex-col'>
                            <span className='font-bold text-xs'>Password</span>
                            <input
                                type='text'
                                className='w-full border-2 border-[#a6a6a6] rounded-md p-1'
                            />
                        </div>
                        <div className='submit'>
                            <button className='bg-ButtonColor p-2 border-2 border-[#8d8d8d] rounded-md text-sm w-full'>
                                SUBMIT
                            </button>
                        </div>
                    </div>
                    <div className='bottomText my-3'>
                        <p className='text-xs leading-4'>
                            By continuing, you agree to Amazon's Conditions of
                            Use and Privacy Notice.
                        </p>
                    </div>
                </div>
                <Link to='/register' className='bottom mt-4'>
                    <button className='px-2 w-full text-sm bg-[#eff0f3] border-2 border-[#8d8d8d] rounded-md py-1'>
                        Create Your Amazon account
                    </button>
                </Link>
            </div>
        </div>
    )
}
