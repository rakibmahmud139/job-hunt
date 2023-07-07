import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className=' flex justify-between items-center p-2 rounded shadow-md bg-gray-100'>
            <h1 className='font-semibold text-3xl text-gray-900'>JobHunt</h1>
            <div className='flex gap-12 text-gray-500'>
                <Link>
                    <p>Statistics</p>
                </Link>
                <Link>
                    <p>Applied Jobs</p>
                </Link>
                <Link>
                    <p>Blog</p>
                </Link>
            </div>
            <button className='btn-primary'>Star Applying</button>
        </nav>
    );
};

export default NavBar;