import Slider from '@mui/material/Slider';
import React from 'react';

const AnalysisCard = ({image, title, heading, description}) => {
  return (
    <div className='lg:p-15 md:p-10 py-10 px-5 w-full'>
        <h3 className='text-xl font-medium mb-4'>{heading}</h3>
        <div className='flex items-center gap-5'>
            {heading === "Consumer App" ? (
                <img className='w-13 h-13 lg:w-10 md:w-12 md:h-12 lg:h-10 rounded bg-[#c0dfcbb5] p-1.5' src={image} alt="icon" />
            ) : 
                <img className='w-13 h-13 lg:w-10 md:w-12 md:h-12 lg:h-10 rounded bg-blue-200 p-1.5' src={image} alt="icon" />
            }
            <div>
                <h3 className='text-[18px] font-medium'>{title}</h3>
                <p className='text-sm text-gray-500'>{description}</p>
            </div>
        </div>
        {heading === "Consumer App" ? (
            <div className='text-sm text-green-700 bg-[#b7e4c7d7] w-35 rounded-xl border p-2 mt-3 flex gap-2'>
                <img className='w-5' src="../src/assets/check.svg" alt="check icon" />
                <p className='font-medium'>Likely Genuine</p>
            </div>
        ) : 
        <>
            <div className='bg-gray-300 lg:w-100 md:w-100  h-1.5 rounded-full mt-5'>
                <div className='lg:w-84 md:w-84 w-50 h-1.5 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
            </div>
            <p className='mt-5 text-sm text-gray-500'>Trust Score : 84%</p>    
        </>
        }
    </div>
  )
}

export default AnalysisCard;