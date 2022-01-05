import React from 'react'

export const Footer = () => {
    return (
        <footer className=''>
            <div className='top h-10 flex items-center justify-center bg-FooterSecondary text-white'>
                <span>Back to top </span>
            </div>
            <div className='bottom flex justify-center gap-x-28 p-12 px-5 py-20 text-white bg-Primary'>
                <div className='block1'>
                    <div className='heading text-lg font-bold'>
                        Get to Know Us
                    </div>
                    <div className='list mt-1 gap-y-2 flex flex-col text-[#DDD]'>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            About Us
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Carrers
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Press Releases
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Amazon Cares
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Gift a Smile
                        </span>
                    </div>
                </div>
                <div className='block2'>
                    <div className='heading text-lg font-bold'>
                        Connect with Us
                    </div>
                    <div className='list mt-1 gap-y-2 flex flex-col text-[#DDD]'>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Facebook
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Twitter
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Instagram
                        </span>
                    </div>
                </div>
                <div className='block3'>
                    <div className='heading text-lg font-bold'>
                        Make Money with Us
                    </div>
                    <div className='list mt-1 gap-y-2 flex flex-col text-[#DDD]'>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Sell on Amazon
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Sell under Amazon Accelerator
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Amazon Global Selling
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Become an Affiliate
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Fulfillment by Amazon
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Advertise your Products
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Amazon Pay on Merchants
                        </span>
                    </div>
                </div>
                <div className='block4'>
                    <div className='heading text-lg font-bold'>
                        Let Us Help You
                    </div>
                    <div className='list mt-1 gap-y-2 flex flex-col text-[#DDD]'>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            COVID-19 and Amazon
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Your Account
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Returns Centre
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            100% Purchase Protection
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Amazon App Download
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Amazon Assistant Download
                        </span>
                        <span className='hover:underline cursor-pointer text-sm font-medium'>
                            Help
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
