/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const Cart = () => {
    return (
        <div className='cartContainer px-10 py-10'>
            <div className='productOuterContainer py-5 bg-white'>
                <div className='top p-4'>
                    <h1 className='text-3xl font-medium'>Shopping Cart</h1>
                    <span className='text-LinkText hover:underline'>
                        1 item Selected
                    </span>
                </div>
                <hr />
                <div className='productsContainer'>
                    <div className='product flex justify-between px-4 py-2'>
                        <div className='imageBox w-1/5'>
                            <img
                                src='https://m.media-amazon.com/images/I/314kGh7sh1L.jpg'
                                alt='product'
                            />
                        </div>
                        <div className='description w-3/5'>
                            <h2 className='text-xl mb-2'>
                                ARZONAI Ironman Tony Stark Avengers Metallic
                                Stylish Square Men's Sunglasses (Silver-Sky
                                Blue, Large)
                            </h2>
                            <div className='selectContainer flex gap-x-5 items-center mt-5'>
                                <div className='selectBox'>
                                    <select
                                        name='quantity'
                                        id='quantity'
                                        className='border-2 border-slate-300 rounded-md px-1'
                                    >
                                        <option value='1' selected>
                                            Qty: 1
                                        </option>
                                        <option value='2'>Qty: 2</option>
                                        <option value='3'>Qty: 3</option>
                                    </select>
                                </div>
                                <a
                                    href='#'
                                    className='text-LinkText font-semibold text-sm hover:underline'
                                >
                                    Delete
                                </a>
                            </div>
                        </div>
                        <div className='price'>
                            <span className='text-lg font-semibold'>
                                Rs. 329
                            </span>
                        </div>
                    </div>
                    <hr className='my-1' />
                    <div className='product flex justify-between px-4 py-2'>
                        <div className='imageBox w-1/5'>
                            <img
                                src='https://m.media-amazon.com/images/I/314kGh7sh1L.jpg'
                                alt='product'
                            />
                        </div>
                        <div className='description w-3/5'>
                            <h2 className='text-xl mb-2'>
                                ARZONAI Ironman Tony Stark Avengers Metallic
                                Stylish Square Men's Sunglasses (Silver-Sky
                                Blue, Large)
                            </h2>
                            <div className='selectContainer flex gap-x-5 items-center mt-5'>
                                <div className='selectBox'>
                                    <select
                                        name='quantity'
                                        id='quantity'
                                        className='border-2 border-slate-300 rounded-md px-1'
                                    >
                                        <option value='1' selected>
                                            Qty: 1
                                        </option>
                                        <option value='2'>Qty: 2</option>
                                        <option value='3'>Qty: 3</option>
                                    </select>
                                </div>
                                <a
                                    href='#'
                                    className='text-LinkText font-semibold text-sm hover:underline'
                                >
                                    Delete
                                </a>
                            </div>
                        </div>
                        <div className='price'>
                            <span className='text-lg font-semibold'>
                                Rs. 329
                            </span>
                        </div>
                    </div>
                    <hr className='my-1' />
                </div>
                <div className='bottom flex w-full items-end px-5 text-xl mb-4 flex-col'>
                    <h2>
                        Subtotal (2 Item): <b>Rs. 658</b>
                    </h2>
                    <button className='bg-[#FFD814] border-2 border-[#FCD200] rounded-full w-60 p-1 py-[3px] leading-5 font-semibold mt-3 text-sm'>
                        Proceed to Buy
                    </button>
                </div>
            </div>
        </div>
    )
}
