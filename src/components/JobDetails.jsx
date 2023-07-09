import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobData = useLoaderData();

    const { salary, jobDes, jobRes, eduRequ, experience, jobTitle, phone, email, address, id } = jobData;
    
    console.log(jobData);

    return (
        <div className='my-container flex justify-between'>
            <div>
                <p>Job description: {jobDes}</p>
                <p>Job Responsibility: {jobRes}</p>
                <p>Educational Requirements: {eduRequ}</p>
                <p>Experience: {experience}</p>
            </div>

            <div>
                <div className='bg-gray-100 shadow-lg p-4 mb-4'>
                    <h3 className='mb-4 font-bold text-gray-800'>Job Details</h3>
                    <p className='font-bold text-gray-500 border-t border-black pt-3'>Salary: <span>{salary}</span></p>
                    <p className='font-bold text-gray-500'>Job Title: <span>{jobTitle}</span></p>

                    <h3 className='mt-12 mb-4 font-bold text-gray-900'>Contract Information</h3>
                    <p className='font-bold text-gray-500 border-t border-black pt-3'>Phone: <span>{phone}</span></p>
                    <p className='font-bold text-gray-500'>Email: <span>{email}</span></p>
                    <p className='font-bold text-gray-500'>Address: <span>{address}</span></p>
                </div>
                <button className='btn-outlined'>Apply Now</button>
            </div>

        </div>
    );
};

export default JobDetails;