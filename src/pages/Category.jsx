import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Category = () => {
    const params = useParams()
    // const [cat, setCat] = useState('')
    const [product, setProduct] = useState([])
    const [fetched, setFetched] = useState(false)
    const [loading, setLoading] = useState(false)
    let cati = params.cat
    // const [prevCat, setPrevCat] = useState('cat')
    // console.log(cat)
    const chackParams = () => {
        // setCat(params.cat)
    }

    useEffect(() => {
        // console.log(product)
        const fetchItems = async () => {
            var cat = params.cat
            setLoading(true)
            console.log(params.cat)
            // chackParams()
            if (cat === 'men-fashion') {
                // setCat(`men's clothing`.toString())
                cat = `men's clothing`
            }
            if (cat === 'women-fashion') {
                cat = `women's clothing`
            }
            const config = {
                headers: {
                    'content-type': 'application/json',
                },
            }
            // setCat(cat.toString())
            console.log(cat)
            await axios
                .get(
                    `${process.env.REACT_APP_BACKEND_URL}/products/category/${cat}`,
                    config
                )
                .then((result) => {
                    console.log('Result', result)
                    setProduct(result.data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                    setLoading(false)
                })

            console.log(
                `${process.env.REACT_APP_BACKEND_URL}products/category/${cat}`
            )
            console.log(product)
        }

        // if (!fetched) {
        //     console.log('FETCHING...')
        //     fetchItems()
        //     setFetched(true)
        // }

        // if (prevCat !== cat) {
        //     setPrevCat(prevCat)
        //     // setFetched(false)
        // }
        // return () => {
        return fetchItems()
        // }
    }, [cati])

    return (
        <div className='flex pb-20'>
            {loading ? (
                <h1>LOADING...</h1>
            ) : (
                <>
                    <div className='left w-48 p-4'>
                        <h2 className='text-xl font-semibold'>Filters</h2>
                    </div>
                    <div className='right p-4'>
                        <div className='top px-2 mb-4'>
                            <h2 className='text-xl font-semibold'>Products</h2>
                        </div>
                        <div className='bottom'>
                            <div className='cardContainer flex flex-wrap gap-x-1 gap-y-4'>
                                {product.map((prod, key) => (
                                    <Card product={prod} key={key} />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

const Card = ({ product }) => {
    return (
        <Link
            to={`/product/${product._id}`}
            className='flex flex-col w-64 items-center cursor-pointer'
        >
            <div className='top px-4 pb-2 bg-white'>
                <img
                    src={
                        product.image ||
                        'https://m.media-amazon.com/images/I/314kGh7sh1L.jpg'
                    }
                    alt='img'
                    className='w-52 h-52'
                />
            </div>
            <div className='bottom flex flex-col px-4'>
                <div className='price font-semibold text-lg'>
                    {product.price || `$50`}
                </div>
                <div className='name'>
                    {product.title ||
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
                </div>
            </div>
        </Link>
    )
}
