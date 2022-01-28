/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    addToCartAction,
    createOrder,
    UpdateCartAction,
} from '../redux/actions/cartAction'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

export const Cart = ({ login }) => {
    const [stripeToken, setStripeToken] = useState(null)
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.cart)
    let { products, quantity, total } = cartData

    const DeleteItem = (e, id) => {
        e.preventDefault()
        dispatch(UpdateCartAction(id))
    }

    const buyProducts = (e, id) => {
        e.preventDefault()
    }

    const onToken = (token) => {
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        }

        return axios
            .post(
                'http://localhost:5000/checkout/payment',
                {
                    tokenId: token,
                    amount: total * 100,
                },
                config
            )
            .then((res) => {
                console.log(res)
                dispatch(createOrder(products, total))
            })
            .catch((err) => console.log(err.message))
    }

    // const appearance = {
    //     theme: 'stripe',
    // }
    console.log(total)
    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     const createPayment = () => {
    //         const config = {
    //             headers: {
    //                 'content-type': 'application/json',
    //             },
    //         }

    //         axios
    //             .post('http://localhost:5000/checkout/payment', {
    //                 tokenId: stripeToken.id,
    //                 amount: total * 100,
    //             })
    //             .then((res) => console.log(res.data))
    //             .catch((err) => console.log(err.message))
    //     }
    // }
    //     // stripeToken && createPayment()
    // }, [stripeToken, total])

    return (
        <div className='cartContainer px-10 py-10'>
            <div className='productOuterContainer py-5 bg-white'>
                {login && products ? (
                    <>
                        <div className='top p-4'>
                            <h1 className='text-3xl font-medium'>
                                Shopping Cart
                            </h1>
                            <span className='text-LinkText hover:underline'>
                                {quantity ? quantity : 0} item Selected
                            </span>
                        </div>
                        <hr />
                        <div className='productsContainer'>
                            {products.map((product, key) => (
                                <h1>
                                    <Product
                                        data={product}
                                        key={key}
                                        DeleteItem={DeleteItem}
                                    />
                                    <hr className='my-1' />
                                </h1>
                            ))}
                        </div>
                        <div className='bottom flex w-full items-end px-5 text-xl mb-4 flex-col'>
                            <h2>
                                Subtotal ({quantity} Item): <b>$ {total}</b>
                            </h2>
                            <StripeCheckout
                                name='DK STORE'
                                image='https://lswordpress.s3.amazonaws.com/blog/wp-content/uploads/2019/12/21001444/Amazon-Logistics.jpg'
                                billingAddress
                                shippingAddress
                                description={`Your total is $${total}`}
                                amount={total * 100}
                                token={onToken}
                                stripeKey={process.env.REACT_APP_STRIPE}
                            >
                                <button
                                    className='bg-[#FFD814] border-2 border-[#FCD200] rounded-full w-60 p-1 py-[3px] leading-5 font-semibold mt-3 text-sm'
                                    onClick={(e) => buyProducts(e)}
                                >
                                    Proceed to Buy
                                </button>
                            </StripeCheckout>
                        </div>
                    </>
                ) : login ? (
                    <h1 className='text-center my-20'>Cart is Empty</h1>
                ) : (
                    <h1 className='text-center my-20'>Please Sign in First</h1>
                )}
            </div>
        </div>
    )
}

const Product = ({ data, DeleteItem }) => {
    return (
        <div className='product flex justify-between px-4 py-2'>
            <Link to={`/product/${data._id}`} className='imageBox w-1/5'>
                <img src={data.image} alt={data.title} className='h-56' />
            </Link>
            <div className='description w-3/5'>
                <h2 className='text-xl mb-2'>{data.title}</h2>
                <div className='selectContainer flex gap-x-5 items-center mt-5'>
                    <div className='selectBox'>
                        <select
                            name='quantity'
                            id='quantity'
                            className='border-2 border-slate-300 rounded-md px-1'
                            defaultValue={data.qty}
                        >
                            <option value='1' selected>
                                Qty: 1
                            </option>
                            <option value='2'>Qty: 2</option>
                            <option value='3'>Qty: 3</option>
                            <option value='4'>Qty: 4</option>
                            <option value='5'>Qty: 5</option>
                            <option value='6'>Qty: 6</option>
                            <option value='7'>Qty: 7</option>
                            <option value='8'>Qty: 8</option>
                            <option value='9'>Qty: 9</option>
                            <option value='10'>Qty: 10</option>
                        </select>
                    </div>
                    <a
                        className='text-LinkText font-semibold text-sm hover:underline cursor-pointer'
                        onClick={(e) => DeleteItem(e, data._id)}
                    >
                        Delete
                    </a>
                </div>
            </div>
            <div className='price'>
                <span className='text-lg font-semibold'>
                    $ {data.price * data.qty}
                </span>
            </div>
        </div>
    )
}
