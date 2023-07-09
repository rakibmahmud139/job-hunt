import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';


const Header = () => {

    const jobCategory = useLoaderData();
    console.log(jobCategory);


    return (
        <div>
            <div className='my-container flex items-center bg-gray-100'>
                <div className='mt-12 px-24'>
                    <h3 className='font-bold text-5xl text-gray-900'>One Step Closer To Your <span className='text-cyan-300 mt-3'>Dream Job</span></h3>
                    <p className='text-gray-500 mt-5 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-outlined'>Get Started</button>
                </div>

                <img src="/public/fahim.jpg.png" alt="cover" />
            </div>


            {/* Job Category */}

            <div className='my-container'>
                <h3 className='text-center font-bold text-3xl text-gray-900 mb-5'>Job Category List</h3>
                <p className='text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='flex justify-between mt-8'>
                    {
                        jobCategory.map(category => <Category
                        key={category.id}
                        category={category}
                        ></Category>)
                    }
                </div>
            </div>


        </div>

    );
};

export default Header;