import React from 'react';

const Category = ({ category }) => {
    const { img, jobs, name } = category;
    return (
        <div className='bg-gray-100 py-4 pl-4 pr-24 rounded'>
            <img className='w-16 h-16' src={img} alt="" />
            <h3 className='font-bold  mt-4'>{name}</h3>
            <p className='mt-4'>{jobs}</p>
        </div>
    );
};

export default Category;