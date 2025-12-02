import React from 'react';

const LayerCard = ({image, title, description, tagLevel1, tagLevel2}) => {
  return (
    <div className='lg:w-100 lg:m-3 w-full border p-10 rounded-xl border-gray-200 mb-5 hover:shadow-lg hover:border-blue-200 transition-all duration-100'>
        <img className='bg-blue-200 p-2 w-10 rounded-sm' src={image} alt="image-icon" />
        <div>
            <h3 className='text-xl my-4'>{title}</h3>
            <p className='text-gray-500'>{description}</p>
        </div>
        <div className='flex gap-6 mt-4'>
            <p className='bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full'>{tagLevel1}</p>
            <p className='bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full'>{tagLevel2}</p>
        </div>
    </div>
  )
}

export default LayerCard;