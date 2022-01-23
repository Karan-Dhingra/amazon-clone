import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Category = () => {
    const params = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [sort, setSort] = useState(1)
    let cati = params.cat

    useEffect(() => {
        // console.log(product)
        const fetchItems = async () => {
            var cat = params.cat
            setLoading(true)
            setSort(0)
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

        return fetchItems()
        // }
    }, [cati])

    useEffect(() => {
        const sortProduct = async () => {
            if (sort === 1) {
                console.log('SORT 1')
                await product.sort(function (a, b) {
                    if (a.price > b.price) {
                        return -1
                    }
                    if (a.price < b.price) {
                        return 1
                    }
                    return 0
                })
            }
            if (sort === 2) {
                console.log('SORT 2')
                await product.sort(function (a, b) {
                    if (a.price > b.price) {
                        return 1
                    }
                    if (a.price < b.price) {
                        return -1
                    }
                    return 0
                })
            }
            // } else if (sort === 2) {
            //     console.log('SORT 2')
            // }
            // console.log(data1)
            // console.log(data2)
            console.log(sort)
            console.log(product)
        }

        return sortProduct()
    }, [sort, product])

    return (
        <div className='flex pb-20'>
            {loading ? (
                <h1>LOADING...</h1>
            ) : (
                <>
                    <div className='left w-72 p-4'>
                        <h2 className='text-xl font-semibold'>Filters</h2>
                        <SelectBar setSort={setSort} />
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
                    {`$` + product.price || `$50`}
                </div>
                <div className='name'>
                    {product.title ||
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
                </div>
            </div>
        </Link>
    )
}

const SelectBar = ({ setSort }) => {
    return (
        <div className='flex items-center gap-x-2'>
            <span>Sort By: </span>
            <select
                name='Sort Data'
                className='border-2 rounded-md px-2 py-1'
                onChange={(e) => {
                    setSort(parseInt(e.target.value))
                }}
            >
                <option value='1'>Lowest Price</option>
                <option value='2'>Highest Price</option>
            </select>
        </div>
    )
}
