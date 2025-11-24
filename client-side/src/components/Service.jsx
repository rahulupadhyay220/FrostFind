import React from 'react'

const Service = () => {
  return (
    <div className='lg:px-10 px-5 my-10 lg:w-full md:w-full w-100 flex lg:justify-evenly md:justify-evenly items-center lg:flex-row md:flex-row flex-col'>
      <div className='p-5 lg:p-0 md:p-0 w-fit'>
        <p className='text-5xl text-blue-500 font-medium'>10M +</p>
        <p className='text-gray-500'>Reviews Analyzed</p>
      </div>
      <div className='p-5 lg:p-0 md:p-0'>
        <p className='text-5xl text-blue-500 font-medium'>95%</p>
        <p className='text-gray-500'>Accuracy Rate</p>
      </div>
      <div className='p-5 lg:p-0 md:p-0'>
        <p className='text-5xl text-blue-500 font-medium'>150 +</p>
        <p className='text-gray-500'>Partner Brands</p>
      </div>
      <div className='p-5 lg:p-0 md:p-0'>
        <p className='text-5xl text-blue-500 font-medium'>24/7</p>
        <p className='text-gray-500'>Real-Time Updates</p>
      </div>
    </div>
  )
}

export default Service;