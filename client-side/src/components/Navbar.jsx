import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center lg:px-10 px-5 py-2 shadow-sm'>
            <Link to={'/'}>
                <img className='lg:h-12 h-9' src="/Logo.png" alt="logo" />
            </Link>
            <div id='menubar' className='bg-gray-200 px-2 py-1 rounded'>
                <MenuIcon />
            </div>
            <div id='nav-link' className='w-180 flex justify-between'>
                <ul className='flex gap-10'>
                    <Link to={'/'}>
                        <li className=' text-xl cursor-pointer hover:text-blue-600'>Home</li>
                    </Link>
                    <Link to={'/categories'}>
                        <li className=' text-xl cursor-pointer hover:text-blue-600'>Categories</li>
                    </Link>
                    <li className=' text-xl cursor-pointer hover:text-blue-600'>Dashboard</li>
                    <li className=' text-xl cursor-pointer hover:text-blue-600'>Services</li>
                </ul>
                <div className='flex gap-5'>
                    <Button variant="contained">List Your Business</Button>
                    <img className='lg:w-8 w-7 cursor-pointer hover:opacity-70' src="../src/assets/bell-icon.svg" alt="notification" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;