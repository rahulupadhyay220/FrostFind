import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center lg:mx-10 mx-8 py-2'>
        <Link to={'/'}>
            <img className='h-12' src="/Logo.png" alt="logo" />
        </Link>
        <div className='w-[30em]'>
            <ul className='flex justify-evenly'>
                <Link to={'/'}>
                    <li className=' text-xl cursor-pointer hover:text-blue-600'>Home</li>
                </Link>
                <Link to={'/categories'}>
                    <li className=' text-xl cursor-pointer hover:text-blue-600'>Categories</li>
                </Link>
                <li className=' text-xl cursor-pointer hover:text-blue-600'>Dashboard</li>
                <li className=' text-xl cursor-pointer hover:text-blue-600'>Services</li>
            </ul>
        </div>
        <div className='flex gap-5'>
            <Button variant="contained">List Your Business</Button>
            <img className='w-8 cursor-pointer hover:opacity-70' src="../src/assets/bell-icon.svg" alt="notification" />
        </div>
    </div>
  )
}

export default Navbar;