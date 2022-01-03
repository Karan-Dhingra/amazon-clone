import React from 'react'
import { Deals } from '../components/Deals'
import { Slider } from '../components/Slider'

export const Home = () => {
    return (
        <div className='mx-3'>
            <Slider />
            <Deals />
        </div>
    )
}
