import Button from '@mui/material/Button';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Shop = () => {
  return (
    <div className='lg:px-10 px-5 w-full'>
      <div className='bg-blue-500 rounded-xl lg:p-10 md:p-10 px-5 py-13 my-25 text-white flex flex-col justify-center items-center text-center'>
        <h1 className='text-4xl font-bold'>Ready to Shop with Confidence?</h1>
        <p className='my-5 lg:w-150 md:w-100'>Join thousands of consumers who trust FrostFind to spot fake reviews and make smarter purchases.</p>
        <div id='shopBtn' className='flex lg:gap-10 md:gap-10 gap-5 lg:flex-row md:flex-row flex-col justify-center my-5'>
          <Button variant="contained">Explore more &nbsp; <ArrowForwardIcon /> </Button>
          <Button variant="outlined">Join Waitlist</Button>
        </div>
      </div>
    </div>
  )
}

export default Shop;