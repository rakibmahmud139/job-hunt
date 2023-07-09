import React from 'react';


const Footer = () => {
    return (
        <div className='my-container bg-black'>
            <div className='flex justify-between mx-12'>
                <div>
                    <div>
                        <h3 className='font-bold text-xl text-white'>JobHunt</h3>
                        <p className='text-gray-500 text-xs mt-4 mb-4'>
                            This is a Job hunt web page. <br /> There are many job category like <br /> google, twitter, facebook so on...
                        </p>
                    </div>
                    <div className='flex text-gray-500'>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Twitter</a>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-white'>Company</h3>
                    <div className='text-gray-500 mt-4'>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-white'>Product</h3>
                    <div className='text-gray-500 mt-4'>
                        <p>Prototype</p>
                        <p>Plans & Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-white'>Support</h3>
                    <div className='text-gray-500 mt-4'>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a partner</p>
                        <p>Developers</p>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-white'>Contract</h3>
                    <div className='text-gray-500 mt-8'>
                        <p>524 Broadway , NYC</p>
                        <p>+9995********</p>
                    </div>
                </div>
            </div>
            <div className='text-gray-500 mt-24 flex justify-between border-t border-gray-700 pt-3'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered By <span className='text-lg text-bold'>JobHunt</span></p>
            </div>
        </div>
    );
};

export default Footer;