import React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import { Component } from 'react'

class Product extends Component {
    constructor() {}

    async componentDidMount() {}

    render() {
        return (
            <div className='productContainer bg-white flex justify-center gap-x-2'>
                <div className='imageBox py-32 px-10 w-2/5'>
                    <img
                        src='https://m.media-amazon.com/images/I/314kGh7sh1L.jpg'
                        alt='product'
                        className=''
                    />
                </div>
                <div className='productDescription w-2/5 py-10'>
                    <h1 className='text-3xl mb-2'>
                        ARZONAI Ironman Tony Stark Avengers Metallic Stylish
                        Square Men's Sunglasses (Silver-Sky Blue, Large)
                    </h1>
                    <StarRating />
                    <hr />
                    <div className='descriptionOfProduct mt-1'>
                        <span className='text-sm font-light'>
                            <li>
                                Care Instructions: A) Do not expose to excessive
                                heat or moisture (B) Do not use oil, soap,
                                varnish, color or any other liquid or solvent to
                                clean the surface. (C) Do not scratch, strike or
                                hit the metalparts. (D) Always store in a soft
                                dry neutral cotton bag in a dry, well ventilated
                                area Care Instructions: A) Do not expose to
                                excessive heat or
                            </li>
                            <li>
                                Frame Material:- Metal | Frame Colour- Silver
                            </li>
                        </span>
                    </div>
                    <div className='priceBox my-2'>
                        <span>
                            Price:
                            <big className='text-red-600 font-semibold'>
                                Rs. 329
                            </big>
                        </span>
                    </div>
                    <div className='orderBox flex flex-col gap-y-3 py-2'>
                        <div className='selectBox'>
                            <select
                                name='quantity'
                                id='quantity'
                                className='border-2 border-slate-300 rounded-md'
                            >
                                <option value='1' selected>
                                    1
                                </option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </select>
                        </div>
                        <div className='orderBtn'>
                            <button className='bg-[#FFD814] border-2 border-[#FCD200] rounded-full w-56 p-1 py-[3px]'>
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
        )
    }
}

export default Product

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