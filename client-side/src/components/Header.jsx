import React from 'react';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Header = () => {
  return (
    <div className='mt-20 mb-5 lg:px-10 px-5 text-center'>
        <div className='flex gap-1 p-1 justify-center'>
            <div className='flex border border-blue-300 px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-500 items-center'>
                <p id='shield'>
                    <ShieldOutlinedIcon />
                </p>
                <p>Trusted by thousands of shoppers</p>
            </div>
        </div>
        <div className='mt-10 w-full'>
            <h1 className='lg:text-7xl md:text-7xl text-[2.5rem] leading-10 lg:leading-none md:leading-none font-bold'>Find What's Real, <br /><span className='text-blue-600'>Faster</span></h1>
            <p className='lg:text-xl md:text-xl text-[18px] my-5 lg:w-150 md:w-150 w-auto m-auto text-gray-500'>FrostFind explains <b>why</b> a review is real or fake. No guessing. No hidden filters. Just trust.</p>
        </div>
        <div className='flex lg:gap-10 md:gap-10 gap-5 lg:flex-row md:flex-row flex-col justify-center my-10'>
            <Button variant="contained">Explore more &nbsp; <ArrowForwardIcon/> </Button>
            <Button variant="outlined">Request Demo</Button>
        </div>
    </div>
  )
}

export default Header;