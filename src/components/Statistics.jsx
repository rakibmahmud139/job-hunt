import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';




const Statistics = () => {
    const assignments = [
        {
            name: 'assignment-1',
            mark: 45,
        },
        {
            name: 'assignment-2',
            mark: 47,
        },
        {
            name: 'assignment-3',
            mark: 10,
        },
        {
            name: 'assignment-4',
            mark: 25,
        },
        {
            name: 'assignment-5',
            mark: 18,
        },
        {
            name: 'assignment-6',
            mark: 0,
        },
        {
            name: 'assignment-7',
            mark: 21,
        },
    ]



    return (
        <div className='my-container'>
            <PieChart className='ml-96' width={300} height={300} >
                <Pie
                    dataKey="mark"
                    startAngle={360}
                    endAngle={0}
                    data={assignments}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8dd1e1"
                    label
                />
                <Tooltip/>
            </PieChart>
        </div>
    );
};

export default Statistics;