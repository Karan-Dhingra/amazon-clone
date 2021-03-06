// import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class Deals extends Component {
    constructor(props) {
        super(props)

        this.state = {
            containerProducts1: [],
            containerProducts2: [],
            containerProducts3: [],
            containerProducts4: [],
            sliderProducts: [{}, {}],
        }
    }

    async componentDidMount() {
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        }
        // console.log(`${process.env.REACT_APP_BACKEND_URL}/products?limit=4`)
        await axios
            .get(
                `${process.env.REACT_APP_BACKEND_URL}/products?limit=4`,
                config
            )
            .then((result) =>
                this.setState({ containerProducts1: result.data })
            )
            .catch((err) => console.log(err))

        await axios
            .get(
                `${process.env.REACT_APP_BACKEND_URL}/products?limit=4&skip=4`,
                config
            )
            .then((result) =>
                this.setState({ containerProducts2: result.data })
            )
            .catch((err) => console.log(err))

        await axios
            .get(
                `${process.env.REACT_APP_BACKEND_URL}/products?limit=4&skip=8`,
                config
            )
            .then((result) =>
                this.setState({ containerProducts3: result.data })
            )
            .catch((err) => console.log(err))

        await axios
            .get(
                `${process.env.REACT_APP_BACKEND_URL}/products?limit=4&skip=12`,
                config
            )
            .then((result) =>
                this.setState({ containerProducts4: result.data })
            )
            .catch((err) => console.log(err))

        await axios
            .get(
                `${process.env.REACT_APP_BACKEND_URL}/products?limit=16&skip=3`,
                config
            )
            .then((result) => this.setState({ sliderProducts: result.data }))
            .catch((err) => console.log(err))

        // console.log('Products: ', this.state.sliderProducts)
    }

    render() {
        return (
            <div className='mx-3 relative'>
                {/* Deals Container */}
                <div className='absolute -top-[36rem]'>
                    <DealsContainer
                        products1={this.state.containerProducts1}
                        products2={this.state.containerProducts2}
                        products3={this.state.containerProducts3}
                        products4={this.state.containerProducts4}
                    />
                </div>
                <div className='mt-[16rem]'>
                    <DealsSlider products={this.state.sliderProducts} />
                    <DealsContainer
                        products1={this.state.containerProducts1}
                        products2={this.state.containerProducts2}
                        products3={this.state.containerProducts3}
                        products4={this.state.containerProducts4}
                    />
                    <DealsSlider products={this.state.sliderProducts} />
                    <DealsContainer
                        products1={this.state.containerProducts1}
                        products2={this.state.containerProducts2}
                        products3={this.state.containerProducts3}
                        products4={this.state.containerProducts4}
                    />
                    <DealsSlider products={this.state.sliderProducts} />
                </div>
            </div>
        )
    }
}

export default Deals

const DealsContainer = ({ products1, products2, products3, products4 }) => {
    return (
        <div className='flex items-center justify-between w-full gap-x-4 gap-y-8'>
            <DealContainerCard products={products1} />
            <DealContainerCard products={products2} />
            <DealContainerCard products={products3} />
            <DealContainerCard products={products4} />
            {/* <DealContainerCard products={products} /> */}
        </div>
    )
}

const DealContainerCard = ({ products }) => {
    return (
        <div className='card max-w-[355px] min-h-64 bg-white p-3'>
            <div className='top'>
                <span className='text-xl font-bold'>
                    Upgrade your home | Amazon Brands & more
                </span>
            </div>
            <div className='bottom mt-5 flex flex-wrap items-center justify-between gap-y-5 flex-grow'>
                {products?.map((product) => {
                    return (
                        <div
                            key={product._id}
                            className='imageBox flex flex-col w-[49%]'
                        >
                            <div className='box bg-SearchBackground h-44 w-full'>
                                <Link
                                    to={`/product/${product._id}`}
                                    className='w-[inherit] h-[inherit]'
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className='w-[inherit] h-[inherit] cursor-pointer'
                                    />
                                </Link>
                            </div>
                            <span className='text-xs truncate'>
                                {product.title}
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className='lower mt-6'>
                <span className='text-xs text-LinkText font-semibold'>
                    Shop now
                </span>
            </div>
        </div>
    )
}

const DealsSlider = ({ products }) => {
    return (
        <div className='dealSlider w-[96vw] bg-white my-10 py-4'>
            <div className='top flex items-end px-5'>
                <h2 className='text-lg font-bold mr-4'>Today's Deals</h2>
                <span className='text-LinkText font-semibold'>
                    See all deals
                </span>
            </div>
            <div className='bottom px-8 mt-4 overflow-x-scroll overflow-y-hidden overflow-hidden'>
                <div className='itemsContainer flex flex-grow items-center gap-x-6 w-min'>
                    {products?.map((product) => {
                        return (
                            <div
                                key={product._id}
                                className='item flex flex-col items-center w-min'
                            >
                                <div className='itemImage h-40 bg-[#c7c7c7c9] w-32'>
                                    <Link
                                        to={`/product/${product._id}`}
                                        className='w-[inherit] h-[inherit]'
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className='w-[inherit] h-[inherit]'
                                        />
                                    </Link>
                                </div>
                                <div className='price'>{`${product.price} $`}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
