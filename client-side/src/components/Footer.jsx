import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='lg:px-10 px-5 py-15 bg-[#1c2541] text-white'>
            <div className='flex lg:flex-row flex-col justify-between px-5'>
                <div>
                    <Link to={'/'}>
                        <img className='lg:w-60 w-45' src="/footer-Logo.png" alt="logo" />
                    </Link>
                    <p className='text-gray-400'>Your shield against fake reviews.</p>
                </div>
                <div className='my-4 lg:my-0'>
                    <h3 className='lg:text-2xl md:text-2xl text-xl'>Product</h3>
                    <ul className='mt-3 w-fit'>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>Explore</li>
                        <Link to={'/categories'}>
                            <li className='text-gray-300 hover:text-blue-400 transition-all'>Categories</li>
                        </Link>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>Business Dashboard</li>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>Marketplace Widget</li>
                    </ul>
                </div>
                <div>
                    <h3 className='lg:text-2xl md:text-2xl text-xl'>Company</h3>
                    <ul className='mt-3 w-fit'>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>About Us</li>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>Contact Us</li>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>Blog</li>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>Careers</li>
                    </ul>
                </div>
                <div className='my-4 lg:my-0'>
                    <h3 className='lg:text-2xl md:text-2xl text-xl'>Trust & Security</h3>
                    <ul className='mt-3 w-fit'>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>Security</li>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>Privacy Policy</li>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>How it Works</li>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'>Accessibility</li>
                    </ul>
                </div>
                <div>
                    <h3 className='lg:text-2xl md:text-2xl text-xl'>Connect</h3>
                    <ul className='mt-3 flex gap-4'>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'><MailOutlineIcon /></li>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'><LinkedInIcon /></li>
                        <li className='text-gray-300 hover:text-blue-400 transition-all'><XIcon /></li>
                    </ul>
                </div>
            </div>
            <hr className='my-10 opacity-30' />
            <div className='flex lg:flex-row md:flex-row flex-col justify-between'>
                <div className='text-sm text-gray-400'>
                    &copy; {new Date().getFullYear()} FrostFind. Your shield against fake reviews.
                </div>
                <div className='mt-3 lg:mt-0 md:mt-0'>
                    <ul className='flex gap-5 justify-center lg:justify-end'>
                        <li className='text-sm text-gray-400 hover:text-blue-400 transition-all'>Terms of Service</li>
                        <li className='text-sm text-gray-400 hover:text-blue-400 transition-all'>Privacy</li>
                        <li className='text-sm text-gray-400 hover:text-blue-400 transition-all'>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;