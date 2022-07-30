import React from 'react';

function AdvertisingCount() {
    return (
        <div className='advertising-count-container'>
            <div className="advertising-count-container grid grid-cols-12 tracking-wide container mx-auto">
                <div className='lg:col-span-3 md:col-span-6 col-span-12 pt-20 text-center md:mt-8 '>
                    <p className='font-bold text-4xl'>70 million</p>
                    <p className='text-lg text-gray-500 mt-3'>Monthly Page Views</p>
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-12 pt-20 text-center md:mt-8 '>
                    <p className='font-bold text-4xl'>88%</p>
                    <p className='text-lg text-gray-500 mt-3'>Organic Traffic</p>
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-12 pt-20 text-center md:mt-8 '>
                    <p className='font-bold text-4xl'>7.8 million</p>
                    <p className='text-lg text-gray-500 mt-3'>Number of Individual Members</p>
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-12 pt-20 text-center md:mt-8 mb-20 '>
                    <p className='font-bold text-4xl'>20 million</p>
                    <p className='text-lg text-gray-500 mt-3'>Monthly Visitor</p>
                </div>
            </div>
        </div>
    );
}

export default AdvertisingCount;