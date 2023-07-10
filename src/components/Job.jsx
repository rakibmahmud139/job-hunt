import React from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Job = ({ job }) => {
    const { id, img, title, subTitle, jobType, location, salary } = job;
    return (
        <div className='border pt-4 pl-8 pb-4 shadow-lg'>
            <img className='w-24 h-16' src={img} alt="" />
            <h3 className='font-bold mt-4 text-gray-800'>{title}</h3>
            <p className='mt-2 text-gray-500'>{subTitle}</p>
            <div className='mt-2 flex gap-4'>
                <p className='border border-cyan-400 py-1 px-2 rounded text-gray-500'>{jobType[0]}</p>
                <p className='border border-cyan-300 py-1 px-2 rounded text-gray-500'>{jobType[1]}</p>
            </div>
            <div className='mt-2 flex gap-4'>
                <p className='text-gray-500 flex justify-center items-center'>
                    <MapPinIcon className="h-5 w-4" /> {location}</p>
                <p className='text-gray-500 flex justify-center items-center'>
                <CurrencyDollarIcon className="h-5 w-4" />  {salary}</p>
            </div>

            <Link to={`../job-details/${id}`}>
                <button className='bg-cyan-500 text-white px-2 py-1 rounded mt-2 hover:bg-cyan-800 transition duration-500'>View Details</button>
            </Link>
        </div>
    );
};

export default Job;