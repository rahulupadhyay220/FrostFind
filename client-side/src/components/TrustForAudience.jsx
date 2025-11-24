import React from 'react'
import Sample from './Sample';

const TrustForAudience = () => {
  return (
    <div className='lg:px-10 md:px-10 px-5 mt-30 flex justify-evenly lg:flex-row flex-col gap-10'>
      <div>
        <h1 className='lg:text-4xl text-3xl font-semibold mb-4'>A Trust Layer for Every Audience</h1>
        <div className='flex lg:items-center items-start gap-2'>
          <img className='w-5 h-5 mt-1 lg:mt-0 md:mt-0' src="../src/assets/circle-check.svg" alt="check icon" />
          <p className='lg:text-xl text-md lg:leading-12 text-gray-600'>Consumer-facing review analysis with trust badges</p>
        </div>
        <div className='flex items-center gap-2'>
          <img className='w-5 h-5' src="../src/assets/circle-check.svg" alt="check icon" />
          <p className='lg:text-xl text-md text-gray-600'>Business dashboard for brand monitoring</p>
        </div>
        <div className='flex items-center gap-2'>
          <img className='w-5 h-5' src="../src/assets/circle-check.svg" alt="check icon" />
          <p className='lg:text-xl text-md lg:leading-12 text-gray-600'>Marketplace widget for seamless integration</p>
        </div>
        <div className='flex items-center gap-2'>
          <img className='w-5 h-5' src="../src/assets/circle-check.svg" alt="check icon" />
          <p className='lg:text-xl text-md text-gray-600'>API access for custom integrations</p>
        </div>
        <div className='flex items-center gap-2'>
          <img className='w-5 h-5' src="../src/assets/circle-check.svg" alt="check icon" />
          <p className='lg:text-xl text-md lg:leading-12 text-gray-600'>Explainable AI with regulatory compliance</p>
        </div>
        <div className='flex items-center gap-2'>
          <img className='w-5 h-5' src="../src/assets/circle-check.svg" alt="check icon" />
          <p className='lg:text-xl text-md text-gray-600'>Multilingual support (English, Hindi, and more)</p>
        </div>
      </div>
      <div className='bg-blue-100 rounded-2xl lg:p-10 p-5 lg:w-160 w-full flex flex-col gap-5'>
        <Sample title={"Product: Samsung Galaxy S24"} description={"Best phone ever! Fast, reliable, amazing camera..."} level={"verify"} />
        <Sample title={"Product: Samsung Galaxy S24"} description={"Best phone ever! Fast, reliable, amazing camera..."} level={"flag"} />
      </div>
    </div>
  )
}

export default TrustForAudience;