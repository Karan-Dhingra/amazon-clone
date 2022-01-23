import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../redux/actions/cartAction'
// import { Component } from 'react'

export const Product = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { error } = cart
    const id = params.id
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [fetched, setFetched] = useState(false)
    // console.log(id)

    const addToCart = (e) => {
        e.preventDefault()
        dispatch(addToCartAction(quantity, product))
        // console.log(product);
        console.log(error)
    }

    useEffect(() => {
        const fetchItems = async () => {
            const config = {
                headers: {
                    'content-type': 'application/json',
                },
            }

            await axios
                .get(
                    `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
                    config
                )
                .then((result) => {
                    // console.log('Result', result)/
                    setProduct(result.data)
                    // console.log(result.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        if (!fetched) {
            fetchItems()
            setFetched(true)
        }
    }, [fetched, product, id])

    return (
        <>
            {product ? (
                <div className='productContainer bg-white flex justify-center gap-x-2'>
                    <div className='imageBox py-32 px-10 w-2/5'>
                        <img
                            src={product.image}
                            alt='product'
                            className='max-h-96'
                        />
                    </div>
                    <div className='productDescription w-2/5 py-10'>
                        <h1 className='text-3xl mb-2'>{product.title}</h1>
                        <StarRating />
                        <hr />
                        <div className='descriptionOfProduct mt-1'>
                            <span className='text-sm font-light'>
                                <li>{product.description}</li>
                            </span>
                        </div>
                        <div className='priceBox my-2'>
                            <span>
                                Price:{' '}
                                <big className='text-red-600 font-semibold'>
                                    ${product.price}
                                </big>
                            </span>
                        </div>
                        <div className='orderBox flex flex-col gap-y-3 py-2'>
                            <div className='selectBox'>
                                <select
                                    name='quantity'
                                    id='quantity'
                                    className='border-2 border-slate-300 rounded-md'
                                    onChange={(e) =>
                                        setQuantity(parseInt(e.target.value))
                                    }
                                >
                                    <option value='1' selected>
                                        1
                                    </option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                </select>
                            </div>
                            <div className='orderBtn'>
                                <button
                                    className='bg-[#FFD814] border-2 border-[#FCD200] rounded-full w-56 p-1 py-[3px]'
                                    onClick={(e) => addToCart(e)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                            <div className='buyBtn'>
                                <button className='bg-[#FFA41C] border-2 border-[#FF8F00] rounded-full w-56 p-1 py-[3px]'>
                                    Buy Now
                                </button>
                            </div>
                            <div className='wishList mt-2'>
                                <button className='px-2 w-64 text-sm bg-[#eff0f3] border-2 border-[#8d8d8d] rounded-md py-1'>
                                    Add to Wish List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <DummyCard />
            )}
        </>
    )
}

const DummyCard = () => {
    return (
        <div className='productContainer bg-white flex justify-center gap-x-10'>
            <div className='flex items-center justify-center w-2/5'>
                <div className='imageBox py-32 px-10 bg-slate-400 rounded animate-pulse h-96 w-full'></div>
            </div>
            <div className='productDescription w-2/5 py-10'>
                <div className='h-24 bg-slate-400 rounded col-span-2 animate-pulse'></div>
                <div className='h-5 bg-slate-400 w-32 my-1 rounded col-span-2 animate-pulse'></div>
                {/* <StarRating /> */}
                <hr />
                <div className='descriptionOfProduct mt-1'>
                    <span className='text-sm font-light'>
                        <div className='h-5 bg-slate-400 rounded col-span-2 animate-pulse'></div>
                    </span>
                </div>
                <div className='selectBox bg-slate-400 my-4 rounded h-5 w-10 animate-pulse'></div>
                <div className='orderBox flex flex-col gap-y-3 py-2'>
                    <div className='selectBox bg-slate-400 rounded h-5 w-24 animate-pulse'></div>
                </div>
                <div className='flex flex-col gap-y-1 py-2'>
                    <div className='orderBtn'>
                        <button className='bg-slate-400 rounded-full animate-pulse w-56 h-8 p-1 py-[3px] cursor-default'></button>
                    </div>
                    <div className='buyBtn'>
                        <button className='bg-slate-400 rounded-full animate-pulse w-56 h-8 p-1 py-[3px] cursor-default'></button>
                    </div>
                    <div className='wishList'>
                        <button className='bg-slate-400 rounded-full animate-pulse w-56 h-8 p-1 py-[3px] cursor-default'></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const StarRating = () => {
    const [value, setValue] = React.useState(2.5)

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating
                name='half-rating'
                precision={0.5}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            />
        </Box>
    )
}
