import React from 'react';
import { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OverviewChart = () => {
    const data = [
        {
            name: 'Feb',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Mar',
            uv: 3000,
            pv: 500,
            amt: 2210,
        },
        {
            name: 'Apr',
            uv: 2000,
            pv: 7800,
            amt: 2290,
        },
        {
            name: 'May',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Jun',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jul',
            uv: 2390,
            pv: 3800,
            amt: 8000,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>


        </div>
    );
};

export default OverviewChart;