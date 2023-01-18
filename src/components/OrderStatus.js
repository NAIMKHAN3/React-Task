import React from 'react';

const OrderStatus = () => {
    return (
        <div className='shadow-2xl rounded-lg p-2 m-2 h-[330px]'>
            <h1 className='font-bold'>Order Status</h1>
            <div className='flex justify-center items-center'>
                <div className="radial-progress my-10" style={{ "--value": 76 }}><span className='text-black'></span></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 my-5'>
                <small>Complete</small>
                <small>Pending</small>
                <small>Status</small>
            </div>
        </div>
    );
};

export default OrderStatus;