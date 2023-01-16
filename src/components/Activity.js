import React from 'react';

const Activity = () => {
    return (
        <div className='p-3 m-3'>
            <h1 className='font-bold mb-5'>Recent Activity</h1>
            <div className='flex'>
                <div className='rounded-md p-1 m-2 bg-base-200 w-[70px] text-center'>
                    <h1 className='font-bold'>12</h1>
                    <p className='font-bold'>Sep</p>
                </div>
                <div>
                    <h1>Responded to need "volunteer Activities"</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='rounded-md p-1 m-2 bg-base-200 w-[70px] text-center'>
                    <h1 className='font-bold'>11</h1>
                    <p className='font-bold'>Sep</p>
                </div>
                <div>
                    <h1>Everyone realizes would be desirable... <a className='text-primary' href="">Read more</a></h1>
                </div>
            </div>
            <div className='flex'>
                <div className='rounded-md p-1 m-2 bg-base-200 w-[70px] text-center'>
                    <h1 className='font-bold'>10</h1>
                    <p className='font-bold'>Sep</p>
                </div>
                <div>
                    <h1>Joined the group "Boardsmanship Forum"</h1>
                </div>
            </div>
        </div>
    );
};

export default Activity;