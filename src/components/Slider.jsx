import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { SliderItems } from '../Data'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const Slider = () => {
    return (
        <header className='relative'>
            <div>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    interval={5000}
                >
                    {SliderItems.map((item) => (
                        <div key={item.id}>
                            <img src={item.img} alt='item' />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className='bg-gradient-to-b from-[#79797971] to-[#ededed67] h-72 w-full absolute -bottom-16 blur-md backdrop-blur-xl	'></div>
        </header>
    )
}
