import React from 'react';


const Header = () => {
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
                <h3 className='font-bold text-3xl text-gray-900 mb-5'>Job Category List</h3>
                <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div>

                </div>
            </div>


            {/* Jobs Features */}

            <div className='my-container'>
                <h3 className='font-bold text-3xl text-gray-900 mb-5'>Featured Jobs</h3>
                <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        </div>

    );
};

export default Header;