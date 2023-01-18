import React from 'react';
import { FaCircleNotch, FaShoppingCart, FaUserFriends } from 'react-icons/fa';

const Card = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='grid grid-cols-2 lg:flex  shadow-lg p-3 my-2 mx-1 rounded-md'>
                <FaCircleNotch className='w-12  h-8 text-primary my-auto '></FaCircleNotch>
                <div>
                    <small>Revenues</small>
                    <div className='flex justify-between'>
                        <small>$21,456</small>
                        <small className='bg-base-300 rounded-lg px-2 text-green-400 ml-[50px]'>+2.65%</small>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:flex shadow-lg p-3 m-2 rounded-md'>
                <FaShoppingCart className='w-12 h-6 text-primary my-auto'></FaShoppingCart>
                <div>
                    <small>Orders</small>
                    <div className='flex justify-between w-full'>
                        <small>5,643</small>
                        <small className='bg-base-300 rounded-lg px-2 text-red-400 ml-[50px]'>-0.82%</small>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:flex shadow-lg p-3 m-2 rounded-md'>
                <FaUserFriends className='w-12 h-6 text-primary my-auto'></FaUserFriends>
                <div>
                    <small>Customers</small>
                    <div className='flex justify-between'>
                        <small>45,254</small>
                        <small className='bg-base-300 rounded-lg px-2 text-red-400 ml-[50px]'>-1.04%</small>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;