import React from 'react';

const TopOrder = () => {
    return (
        <div className='shadow-2xl rounded-lg p-2 m-2 h-[330px]'>
            <h1 className='font-bold'>Top Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-1'>
                <div className='flex'>
                    <h1 className='text-white font-bold bg-primary text-center h-8 p-2 rounded-lg my-auto'>#1</h1>
                    <div className='ml-2'>
                        <small>Polo Blue T-shird</small>
                        <h1 className='font-bold '>25.4</h1>
                    </div>
                </div>
                <div className='text-end'>
                    <small className='bg-base-300 rounded-lg px-2'>3.82k</small>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-1'>
                <div className='flex'>

                    <h1 className='text-white font-bold bg-primary text-center h-8 p-2 rounded-lg my-auto'>#2</h1>

                    <div className='ml-2'>
                        <small>Hoodie For Men</small>
                        <h1 className='font-bold '>24.5</h1>
                    </div>
                </div>
                <div className='text-end'>
                    <small className='bg-base-300 rounded-lg px-2'>3.14k</small>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-1'>
                <div className='flex'>
                    <h1 className='text-white font-bold bg-primary text-center h-8 p-2 rounded-lg my-auto'>#3</h1>
                    <div className='ml-2'>
                        <small>Red Color Cap</small>
                        <h1 className='font-bold '>22.5</h1>
                    </div>
                </div>
                <div className='text-end'>
                    <small className='bg-base-300 rounded-lg px-2'>2.84k</small>
                </div>
            </div>
        </div>
    );
};

export default TopOrder;