import React from 'react';

const Progressbar = () => {
    return (
        <div className='p-3 m-3 border-b-2'>
            <h1>Earning</h1>
            <div className='flex flex-col justify-center items-center'>
                <div className="radial-progress text-primary" style={{ "--value": 76 }}><span className='text-black'>76%</span></div>
                <h1>$26,256</h1>
                <p>Earning This Month</p>
                <h4 className=''><span className='bg-base-300 rounded-lg px-2 text-green-400'>+2.65%</span> From Previous Period</h4>
            </div>

        </div>
    );
};

export default Progressbar;