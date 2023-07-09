import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='my-container flex justify-between items-center p-4 bg-gray-100'>
            <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : 'default')}>
                <h1 className='font-bold text-3xl'>JobHunt</h1>
            </NavLink>

            <div className='flex gap-12'>
                <NavLink
                    to='/statistics'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    <p>Statistics</p>
                </NavLink>

                <NavLink to='applied-jobs'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    <p>Applied Jobs</p>
                </NavLink>

                <NavLink to='blogs'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    <p>Blog</p>
                </NavLink>
            </div>

            <button className='btn-primary'>Start Applying</button>
        </nav>
    );
};

export default NavBar;