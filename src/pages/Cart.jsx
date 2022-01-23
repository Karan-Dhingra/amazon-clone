/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCartAction, UpdateCartAction } from '../redux/actions/cartAction'

export const Cart = () => {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.cart)
    // const updateCart = useSelector(state => state.updateCart)
    let { products, quantity, total } = cartData
    // let { newProducts, newQuantity, newTotal, updated } = updateCart
    // console.log(data.products);
    // const [data, setData] = useState(null)
    // const [products, setProducts] = useState()
    // const [quantity, setQuantity] = useState(0)
    // const [total, setTotal] = useState(0)

    const DeleteItem = (e, id) => {
        e.preventDefault()
        dispatch(UpdateCartAction(id))
        // dispatch(addToCartAction(id, products, deleteItem))
    }

    // useEffect(() => {
    //     const parseData = () => {
    //         setData(JSON.parse(localStorage.getItem('cartInfo')))
    //         setProducts(data.products)
    //         setQuantity(data.quantity)
    //         setTotal(data.total)
    //         if (products)
    //             products.reverse();
    //     }
    //     // return parseData()
    //     // return () => {
    //     // parseData()
    //     // };
    // }, []);

    return (
        <div className='cartContainer px-10 py-10'>
            <div className='productOuterContainer py-5 bg-white'>
                {products ? (
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
                            <button className='bg-[#FFD814] border-2 border-[#FCD200] rounded-full w-60 p-1 py-[3px] leading-5 font-semibold mt-3 text-sm'>
                                Proceed to Buy
                            </button>
                        </div>
                    </>
                ) : (
                    <h1 className='text-center my-20'>Cart is Empty</h1>
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
