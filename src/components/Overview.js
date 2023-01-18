import React from 'react';

const Overview = () => {
    return (
        <div className='p-3'>
            <h1 className='ml-3'>Overview</h1>
            <small className='ml-3'>This Month</small>
            <h1 className='font-bold text-2xl ml-3'>$24,568 <small className='bg-base-300 rounded-lg text-green-400'>+2.65%</small></h1>
            <div className='grid grid-cols-2 my-3 border-b-2'>
                <div className='flex flex-col justify-center items-center border-r-2'>
                    <p>Orders</p>
                    <h1 className='font-bold text-xl'>5,643</h1>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>Sales</p>
                    <h1 className='font-bold text-xl'>16,273</h1>

                </div>
            </div>
            <div className='grid grid-cols-2 my-3 border-b-2'>
                <div className='flex flex-col justify-center items-center border-r-2'>
                    <p>Order value</p>
                    <h1 className='font-bold text-xl'>12.03%</h1>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>Customers</p>
                    <h1 className='font-bold text-xl'>21,456</h1>

                </div>
            </div>
            <div className='grid grid-cols-2 my-3 border-b-2'>
                <div className='flex flex-col justify-center items-center border-r-2'>
                    <p>Income</p>
                    <h1 className='font-bold text-xl'>$35,652</h1>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>Expenses</p>
                    <h1 className='font-bold text-xl'>$12,248</h1>

                </div>
            </div>
        </div>
    );
};

export default Overview;