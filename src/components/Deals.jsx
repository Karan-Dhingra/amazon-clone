import React from 'react'

export const Deals = () => {
    return (
        <div className='mx-3 relative'>
            {/* Deals Container */}
            <div className='absolute -top-[58rem]'>
                <DealsContainer />
            </div>
            <div className='mt-[36rem]'>
                <DealsSlider />
                <DealsContainer />
                <DealsSlider />
                <DealsContainer />
                <DealsSlider />
                <DealsContainer />
                <DealsSlider />
                <DealsContainer />
                <DealsSlider />
                <DealsContainer />
                <DealsSlider />
            </div>
        </div>
    )
}

const DealsContainer = () => {
    return (
        <div className='flex items-center justify-between flex-wrap gap-y-8'>
            <DealContainerCard />
            <DealContainerCard />
            <DealContainerCard />
            <DealContainerCard />
            <DealContainerCard />
            <DealContainerCard />
            <DealContainerCard />
            <DealContainerCard />
        </div>
    )
}

const DealContainerCard = () => {
    return (
        <div className='card max-w-[350px] min-h-64 bg-white p-5'>
            <div className='top'>
                <span className='text-xl font-bold'>
                    Upgrade your home | Amazon Brands & more
                </span>
            </div>
            <div className='bottom mt-5 flex flex-wrap items-center justify-between gap-y-5 flex-grow'>
                <div className='imageBox flex flex-col w-[49%]'>
                    <div className='box bg-SearchBackground h-28 w-full'></div>
                    <span className='text-xs'>Smart LED TVs</span>
                </div>
                <div className='imageBox flex flex-col w-[49%]'>
                    <div className='box bg-SearchBackground h-28 w-full'></div>
                    <span className='text-xs'>Smart LED TVs</span>
                </div>
                <div className='imageBox flex flex-col w-[49%]'>
                    <div className='box bg-SearchBackground h-28 w-full'></div>
                    <span className='text-xs'>Smart LED TVs</span>
                </div>
                <div className='imageBox flex flex-col w-[49%]'>
                    <div className='box bg-SearchBackground h-28 w-full'></div>
                    <span className='text-xs'>Smart LED TVs</span>
                </div>
            </div>
            <div className='lower mt-6'>
                <span className='text-xs text-LinkText font-semibold'>
                    Shop now
                </span>
            </div>
        </div>
    )
}

const DealsSlider = () => {
    return (
        <div className='dealSlider w-[96vw] bg-white my-10 py-4'>
            <div className='top flex items-end px-5'>
                <h2 className='text-lg font-bold mr-4'>Today's Deals</h2>
                <span className='text-LinkText font-semibold'>
                    See all deals
                </span>
            </div>
            <div className='bottom px-8 mt-4 overflow-x-scroll overflow-y-hidden overflow-hidden'>
                <div className='itemsContainer flex flex-grow items-center gap-x-4 w-min'>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                    <div className='item flex flex-col items-center w-min'>
                        <div className='itemImage h-40 bg-[#c7c7c7c9] w-20'></div>
                        <div className='price'>12,000</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
